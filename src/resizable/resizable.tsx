import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  Children,
} from 'react';

import {
  combineSubsectionsWidths,
  calculateProportianalWidths,
  splitWidthsEqually,
} from './utils';
import Subsection from './subsection';
import Divider from './divider';
import Container from './container';
import { KEYBOARD_STEP } from './constants';

type ResizableProps = {
  children: JSX.Element[];
  minWidth?: number;
  initialProportions?: number[];
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
};

function Resizable({
  children,
  minWidth = 100,
  initialProportions,
  onResizeStart,
  onResizeEnd,
}: ResizableProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Number of provided subsections, with empty ones filtered out
  const subsectionCount = React.Children.toArray(children).length;
  // Index of currently dragged splitter, starts with 0
  // No splitter is being dragged if it's null
  // Required to calculate widths of adjacent subsections, e.g. splitter with index 1 is between subsection 1 and 2
  const currentDividerIndex = useRef<number | null>(null);
  // Array of widths (in pixels) of all subsections
  const [subsectionsWidths, setSubsectionsWidths] = useState(
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
      const containerWidth = containerRef.current.getBoundingClientRect().width;

      if (initialProportions) {
        const updatedWidths = calculateProportianalWidths(
          containerWidth,
          initialProportions,
          minWidth,
        );
        setSubsectionsWidths(updatedWidths);
      } else {
        const updatedWidths = splitWidthsEqually(
          containerWidth,
          subsectionCount,
        );
        setSubsectionsWidths(updatedWidths);
      }
    }
  }, [initialProportions, subsectionCount, minWidth]);

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (currentDividerIndex.current === null) {
        return;
      }

      if (containerRef.current) {
        event.stopPropagation();
        event.preventDefault(); // Prevents text from being selected

        setSubsectionsWidths((previousWidths) => {
          if (containerRef.current && currentDividerIndex.current !== null) {
            const updatedWidths = previousWidths;
            const dividerIndex = currentDividerIndex.current;
            const wrapperBoundingBox =
              containerRef.current.getBoundingClientRect();

            // Set min and max divider positions, so it can't be dragged beyond container boundaries
            let minDividerPosition = 0;
            let maxDividerPostion = wrapperBoundingBox.width;

            if (dividerIndex === 0) {
              minDividerPosition = 0 + minWidth;
            } else {
              minDividerPosition =
                combineSubsectionsWidths(previousWidths, dividerIndex) +
                minWidth;
            }

            if (dividerIndex === subsectionCount - 1) {
              maxDividerPostion = wrapperBoundingBox.width - minWidth;
            } else {
              maxDividerPostion =
                combineSubsectionsWidths(previousWidths, dividerIndex + 2) -
                minWidth;
            }

            // Handles the scenario when container is not positioned exactly at the edge of the browser window
            const normalizedDividerPosition =
              event.clientX - wrapperBoundingBox.x;

            // Don't allow subsections to be smaller than minWidth
            if (
              normalizedDividerPosition > minDividerPosition &&
              normalizedDividerPosition < maxDividerPostion
            ) {
              const difference =
                combineSubsectionsWidths(previousWidths, dividerIndex + 1) -
                normalizedDividerPosition;
              // Update the widths of subsections adjacent to currently dragged divider
              updatedWidths[dividerIndex] =
                previousWidths[dividerIndex] - difference;
              updatedWidths[dividerIndex + 1] =
                previousWidths[dividerIndex + 1] + difference;

              return [...updatedWidths];
            }
          }

          return previousWidths;
        });
      }
    },
    [subsectionCount, minWidth],
  );

  const handleStopDrag = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      currentDividerIndex.current = null;

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

      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleStopDrag);

      onResizeStart?.();
    },
    [handleDrag, handleStopDrag, onResizeStart],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, dividerIndex: number) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
      }

      onResizeStart?.();

      setSubsectionsWidths((previousWidths) => {
        const updatedWidths = previousWidths;
        const direction = event.key === 'ArrowRight' ? -1 : 1;

        // Calculate width of adjacent subsections before and after divider
        const subsectionBeforeNewWidth =
          previousWidths[dividerIndex] - KEYBOARD_STEP * direction;
        const subsectionAfterNewWidth =
          previousWidths[dividerIndex + 1] + KEYBOARD_STEP * direction;

        // Don't allow subsections to be smaller than minWidth
        if (
          Math.min(subsectionBeforeNewWidth, subsectionAfterNewWidth) <=
          minWidth
        ) {
          return previousWidths;
        } else {
          updatedWidths[dividerIndex] = subsectionBeforeNewWidth;
          updatedWidths[dividerIndex + 1] = subsectionAfterNewWidth;

          return [...updatedWidths];
        }
      });

      onResizeEnd?.();
    },
    [minWidth, onResizeStart, onResizeEnd],
  );

  // To eleminate all kinds of rounding errors last subsection always takes the remaining space
  // Therefore width doesn't have to be passed explicitly
  return (
    <Container ref={containerRef}>
      {Children.map(children, (child, index) => {
        if (index < subsectionCount - 1) {
          return (
            <>
              <Subsection width={subsectionsWidths[index]}>{child}</Subsection>
              <Divider
                onStartDrag={(event) => handleStartDrag(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              />
            </>
          );
        }
        return <Subsection isLast>{child}</Subsection>;
      })}
    </Container>
  );
}

export default Resizable;
