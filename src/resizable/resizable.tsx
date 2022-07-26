import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  Children,
} from 'react';

import { useCallbackRef } from '../hooks';

import {
  combinePanelsDimensions,
  calculateProportianalDimensions,
  splitDimensionEqually,
  calculateProportionsFromDimensions,
  areDefaultProportionsEqual,
  recalculateDimensionsProportinally,
} from './utils';
import Panel from './panel';
import Divider from './divider';
import Container from './container';
import { KEYBOARD_STEP } from './constants';

const layoutMap = {
  column: {
    dimension: 'width',
    offset: 'x',
    mousePosition: 'clientX',
    keyPositive: 'ArrowRight',
    keyNegative: 'ArrowLeft',
  },
  row: {
    dimension: 'height',
    offset: 'y',
    mousePosition: 'clientY',
    keyPositive: 'ArrowDown',
    keyNegative: 'ArrowUp',
  },
} as const;

type ResizableProps = {
  /* The elements to render in separate panels, divided by separator. Must provide at least _two_ elements. */
  children: JSX.Element[];
  /* The layout of the panels. */
  layout?: 'column' | 'row';
  /* An array of proportions, e.g. `[2, 1, 1]`, which determine the default relative size of each panel. Must have the same length as the number of provided elements. When not provided the panels will default to equal sizes. */
  defaultProportions?: number[];
  /* The minimum size of the panel. When resizing panel can't be collapsed below this value. Default is `100px`. */
  minSize?: string;
  /* If enabled, dividers between panels are visible. */
  showDividers?: boolean;
  /* Sets the style of dividers suitable for dark backgrounds. */
  inverted?: boolean;
  /* Called when divider begins to move. */
  onResizeStart?: () => void;
  /* Called when divider stops moving. Useful for retrieving the proportions of panels. */
  onResizeEnd?: (proportions?: number[]) => void;
};

function Resizable({
  children,
  layout = 'column',
  defaultProportions,
  minSize = '100px',
  showDividers = false,
  inverted = false,
  onResizeStart,
  onResizeEnd,
}: ResizableProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const minPanelSize = parseInt(minSize, 10);

  // Number of provided panels, with empty ones filtered out
  const panelCount = React.Children.toArray(children).length;

  // Index of currently dragged splitter, starts with 0
  // If it's null, it means splitter is not being dragged
  // Required to calculate widths of adjacent panels, e.g. splitter with index 1 is between panel 1 and 2
  // Preserved between re-renders, manually updated via event handlers
  const currentDividerIndex = useRef<number | null>(null);

  // Array of dimensions (in pixels) of all panels
  // Depending on layout they are either widths or heights
  const [panelsDimensions, setPanelsDimensions] = useState(
    Array(panelCount).fill(0),
  );

  // Utility states

  // Used to improve visual behavior of cursor and divider higlighting
  // Prevents jittering when they are being dragged
  const [draggedDividerIndex, setDraggedDividerIndex] = useState<number | null>(
    null,
  );

  // Used to prevent wasteful rerender when onResizeEnd is called
  // Based on https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
  const [previousDefaultProportions, setPreviousDefaultProportions] = useState<
    number[]
  >(Array(panelCount).fill(0));

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (currentDividerIndex.current === null) {
        return;
      }

      if (containerRef.current) {
        event.stopPropagation();
        event.preventDefault(); // Prevents text from being selected

        setPanelsDimensions((previousDimensions) => {
          if (containerRef.current && currentDividerIndex.current !== null) {
            const updatedDimensions = previousDimensions;
            const dividerIndex = currentDividerIndex.current;
            const containerBoundingBox =
              containerRef.current.getBoundingClientRect();

            // Set min and max divider positions, so it can't be dragged beyond container boundaries
            let minDividerPosition = 0;
            let maxDividerPostion = containerBoundingBox.width;

            if (dividerIndex === 0) {
              minDividerPosition = 0 + minPanelSize;
            } else {
              minDividerPosition =
                combinePanelsDimensions(updatedDimensions, dividerIndex) +
                minPanelSize;
            }

            if (dividerIndex === panelCount - 1) {
              maxDividerPostion = containerBoundingBox.width - minPanelSize;
            } else {
              maxDividerPostion =
                combinePanelsDimensions(previousDimensions, dividerIndex + 2) -
                minPanelSize;
            }

            // Handles the scenario when container is not positioned exactly at the edge of the browser window
            const normalizedDividerPosition =
              event[layoutMap[layout].mousePosition] -
              containerBoundingBox[layoutMap[layout].offset];

            // Don't allow panel to be smaller than minWidth
            if (
              normalizedDividerPosition > minDividerPosition &&
              normalizedDividerPosition < maxDividerPostion
            ) {
              const difference =
                combinePanelsDimensions(previousDimensions, dividerIndex + 1) -
                normalizedDividerPosition;
              // Update the widths of panels adjacent to currently dragged divider
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
    [layout, panelCount, minPanelSize],
  );

  const handleStopDrag = useCallbackRef((event: MouseEvent) => {
    event.stopPropagation();
    currentDividerIndex.current = null;
    setDraggedDividerIndex(null);

    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleStopDrag);

    onResizeEnd?.(calculateProportionsFromDimensions(panelsDimensions));
  });

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
        event.key !== layoutMap[layout].keyPositive &&
        event.key !== layoutMap[layout].keyNegative
      ) {
        return;
      }

      onResizeStart?.();

      setPanelsDimensions((previousDimensions) => {
        const updatedDimensions = previousDimensions;
        const direction = event.key === layoutMap[layout].keyPositive ? -1 : 1;

        // Calculate size of adjacent panels (placed before and after divider)
        const panelBeforeNewWidth =
          previousDimensions[dividerIndex] - KEYBOARD_STEP * direction;
        const panelAfterNewWidth =
          previousDimensions[dividerIndex + 1] + KEYBOARD_STEP * direction;

        // Don't allow panel to be smaller than minWidth
        if (Math.min(panelBeforeNewWidth, panelAfterNewWidth) <= minPanelSize) {
          return previousDimensions;
        } else {
          updatedDimensions[dividerIndex] = panelBeforeNewWidth;
          updatedDimensions[dividerIndex + 1] = panelAfterNewWidth;

          return [...updatedDimensions];
        }
      });

      onResizeEnd?.(calculateProportionsFromDimensions(panelsDimensions));
    },
    [layout, minPanelSize, onResizeStart, onResizeEnd, panelsDimensions],
  );

  // Set initial panels dimensions, either based on provided proportions or equally
  useEffect(() => {
    if (panelCount < 2) {
      throw new Error('Resizable should contain at least 2 panels.');
    }

    if (defaultProportions && defaultProportions.length !== panelCount) {
      throw new Error(
        'The lenght of defaultProportions array must be the same as the number of panels.',
      );
    }

    if (containerRef.current) {
      // Total container width or height based on layout
      const containerSize =
        containerRef.current.getBoundingClientRect()[
          layoutMap[layout].dimension
        ];

      if (defaultProportions) {
        // Don't retrigger when initialProportions hasn't changed
        if (
          !areDefaultProportionsEqual(
            previousDefaultProportions,
            defaultProportions,
          )
        ) {
          const updatedDimensions = calculateProportianalDimensions(
            containerSize,
            defaultProportions,
            minPanelSize,
          );
          setPreviousDefaultProportions(defaultProportions);
          setPanelsDimensions(updatedDimensions);
        }
      } else {
        const updatedDimensions = splitDimensionEqually(
          containerSize,
          panelCount,
        );
        setPanelsDimensions(updatedDimensions);
      }
    }
  }, [
    layout,
    defaultProportions,
    previousDefaultProportions,
    panelCount,
    minPanelSize,
  ]);

  // Handle browser window resizing, recalculate each panel size proportinally
  useEffect(() => {
    let previousContainerSize = 0;

    if (containerRef.current) {
      previousContainerSize =
        containerRef.current.getBoundingClientRect()[
          layoutMap[layout].dimension
        ];
    }

    function handleResize() {
      if (containerRef.current) {
        const containerSize =
          containerRef.current.getBoundingClientRect()[
            layoutMap[layout].dimension
          ];

        if (containerSize && previousContainerSize) {
          const multiplier = containerSize / previousContainerSize;

          setPanelsDimensions((previousDimensions) => {
            return recalculateDimensionsProportinally(
              previousDimensions,
              multiplier,
            );
          });
        }

        previousContainerSize = containerSize;
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [layout]);

  // Clean up all listeners when unmounting
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleStopDrag);
    };
  }, [handleDrag, handleStopDrag]);

  // To eleminate all kinds of rounding errors, last panel always takes the remaining space
  // Therefore its size doesn't have to be set explicitly
  return (
    <Container ref={containerRef} layout={layout}>
      {Children.map(children, (child, index) => {
        if (index < panelCount - 1) {
          return (
            <>
              <Panel
                layout={layout}
                dimension={panelsDimensions[index]}
                isDragging={draggedDividerIndex !== null}
                compensateForSeparator={showDividers}
              >
                {child}
              </Panel>
              <Divider
                layout={layout}
                onStartDrag={(event) => handleStartDrag(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                isDragging={draggedDividerIndex === index}
                showSeparator={showDividers}
                inverted={inverted}
              />
            </>
          );
        }
        return (
          <Panel
            layout={layout}
            isDragging={draggedDividerIndex !== null}
            compensateForSeparator={showDividers}
          >
            {child}
          </Panel>
        );
      })}
    </Container>
  );
}

export default Resizable;
