import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  Children,
} from 'react';

import {
  combineSubsectionsDimensions,
  calculateProportianalDimensions,
  splitDimensionEqually,
} from './utils';
import Subsection from './subsection';
import Divider from './divider';
import Container from './container';
import { KEYBOARD_STEP } from './constants';

const orientationMap = {
  vertical: {
    dimension: 'width',
    offset: 'x',
    mousePosition: 'clientX',
    keyPositive: 'ArrowRight',
    keyNegative: 'ArrowLeft',
  },
  horizontal: {
    dimension: 'height',
    offset: 'y',
    mousePosition: 'clientY',
    keyPositive: 'ArrowDown',
    keyNegative: 'ArrowUp',
  },
} as const;

type ResizableProps = {
  children: JSX.Element[];
  orientation?: 'vertical' | 'horizontal';
  minSize?: number;
  initialProportions?: number[];
  showSeparators?: boolean;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
};

function Resizable({
  children,
  orientation = 'vertical',
  minSize = 100,
  initialProportions,
  showSeparators = false,
  onResizeStart,
  onResizeEnd,
}: ResizableProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Number of provided subsections, with empty ones filtered out
  const subsectionCount = React.Children.toArray(children).length;

  // Index of currently dragged splitter, starts with 0
  // No splitter is being dragged if it's null
  // Required to calculate widths of adjacent subsections, e.g. splitter with index 1 is between subsection 1 and 2
  // Preserved between re-renders, manually updated via event handlers
  const currentDividerIndex = useRef<number | null>(null);

  // Used to improve visual behavior of cursor and divider higlighting
  // So they are always visible when divider is being dragged
  const [draggedDividerIndex, setDraggedDividerIndex] = useState<number | null>(
    null,
  );

  // Array of dimensions (in pixels) of all subsections
  // Depending on orientation they are eaither widths or heights
  const [subsectionsDimensions, setSubsectionsDimensions] = useState(
    Array(subsectionCount).fill(0),
  );

  useEffect(() => {
    if (subsectionCount < 2) {
      throw new Error('Resizable should contain at least 2 subsections.');
    }

    if (initialProportions && initialProportions.length !== subsectionCount) {
      throw new Error(
        'The lenght of initialProportions array must be the same as the number of subsections.',
      );
    }

    if (containerRef.current) {
      // Total container width or height based on orientation
      const containerSize =
        containerRef.current.getBoundingClientRect()[
          orientationMap[orientation].dimension
        ];

      if (initialProportions) {
        const updatedDimensions = calculateProportianalDimensions(
          containerSize,
          initialProportions,
          minSize,
        );
        setSubsectionsDimensions(updatedDimensions);
      } else {
        const updatedDimensions = splitDimensionEqually(
          containerSize,
          subsectionCount,
        );
        setSubsectionsDimensions(updatedDimensions);
      }
    }
  }, [orientation, initialProportions, subsectionCount, minSize]);

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (currentDividerIndex.current === null) {
        return;
      }

      if (containerRef.current) {
        event.stopPropagation();
        event.preventDefault(); // Prevents text from being selected

        setSubsectionsDimensions((previousDimensions) => {
          if (containerRef.current && currentDividerIndex.current !== null) {
            const updatedDimensions = previousDimensions;
            const dividerIndex = currentDividerIndex.current;
            const containerBoundingBox =
              containerRef.current.getBoundingClientRect();

            // Set min and max divider positions, so it can't be dragged beyond container boundaries
            let minDividerPosition = 0;
            let maxDividerPostion = containerBoundingBox.width;

            if (dividerIndex === 0) {
              minDividerPosition = 0 + minSize;
            } else {
              minDividerPosition =
                combineSubsectionsDimensions(updatedDimensions, dividerIndex) +
                minSize;
            }

            if (dividerIndex === subsectionCount - 1) {
              maxDividerPostion = containerBoundingBox.width - minSize;
            } else {
              maxDividerPostion =
                combineSubsectionsDimensions(
                  previousDimensions,
                  dividerIndex + 2,
                ) - minSize;
            }

            // Handles the scenario when container is not positioned exactly at the edge of the browser window
            const normalizedDividerPosition =
              event[orientationMap[orientation].mousePosition] -
              containerBoundingBox[orientationMap[orientation].offset];

            // Don't allow subsections to be smaller than minWidth
            if (
              normalizedDividerPosition > minDividerPosition &&
              normalizedDividerPosition < maxDividerPostion
            ) {
              const difference =
                combineSubsectionsDimensions(
                  previousDimensions,
                  dividerIndex + 1,
                ) - normalizedDividerPosition;
              // Update the widths of subsections adjacent to currently dragged divider
              updatedDimensions[dividerIndex] =
                previousDimensions[dividerIndex] - difference;
              updatedDimensions[dividerIndex + 1] =
                previousDimensions[dividerIndex + 1] + difference;

              return [...updatedDimensions];
            }
          }

          return previousDimensions;
        });
      }
    },
    [orientation, subsectionCount, minSize],
  );

  const handleStopDrag = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      currentDividerIndex.current = null;
      setDraggedDividerIndex(null);

      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleStopDrag);

      onResizeEnd?.();
    },
    [handleDrag, onResizeEnd],
  );

  const handleStartDrag = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      event.stopPropagation();
      currentDividerIndex.current = index;
      setDraggedDividerIndex(index);

      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleStopDrag);

      onResizeStart?.();
    },
    [handleDrag, handleStopDrag, onResizeStart],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, dividerIndex: number) => {
      if (
        event.key !== orientationMap[orientation].keyPositive &&
        event.key !== orientationMap[orientation].keyNegative
      ) {
        return;
      }

      onResizeStart?.();

      setSubsectionsDimensions((previousDimensions) => {
        const updatedDimensions = previousDimensions;
        const direction =
          event.key === orientationMap[orientation].keyPositive ? -1 : 1;

        // Calculate size of adjacent subsections before and after divider
        const subsectionBeforeNewWidth =
          previousDimensions[dividerIndex] - KEYBOARD_STEP * direction;
        const subsectionAfterNewWidth =
          previousDimensions[dividerIndex + 1] + KEYBOARD_STEP * direction;

        // Don't allow subsections to be smaller than minWidth
        if (
          Math.min(subsectionBeforeNewWidth, subsectionAfterNewWidth) <= minSize
        ) {
          return previousDimensions;
        } else {
          updatedDimensions[dividerIndex] = subsectionBeforeNewWidth;
          updatedDimensions[dividerIndex + 1] = subsectionAfterNewWidth;

          return [...updatedDimensions];
        }
      });

      onResizeEnd?.();
    },
    [orientation, minSize, onResizeStart, onResizeEnd],
  );

  // To eleminate all kinds of rounding errors last subsection always takes the remaining space
  // Therefore width doesn't have to be passed explicitly
  return (
    <Container ref={containerRef} orientation={orientation}>
      {Children.map(children, (child, index) => {
        if (index < subsectionCount - 1) {
          return (
            <>
              <Subsection
                orientation={orientation}
                dimension={subsectionsDimensions[index]}
                isDragging={draggedDividerIndex !== null}
                compensateForSeparator={showSeparators}
              >
                {child}
              </Subsection>
              <Divider
                orientation={orientation}
                onStartDrag={(event) => handleStartDrag(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                isDragging={draggedDividerIndex === index}
                showSeparator={showSeparators}
              />
            </>
          );
        }
        return (
          <Subsection
            orientation={orientation}
            isDragging={draggedDividerIndex !== null}
            compensateForSeparator={showSeparators}
          >
            {child}
          </Subsection>
        );
      })}
    </Container>
  );
}

export default Resizable;
