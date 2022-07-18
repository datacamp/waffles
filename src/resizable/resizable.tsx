import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  Children,
} from 'react';

import Subsection from './subsection';
import Divider from './divider';
import Container from './container';
import { DIVIDER_WIDTH } from './constants';

// Calculate combined width of subsections up to provided divider index
function combineSubsectionsWidths(
  subsectionsWidths: number[],
  dividerIndex: number,
) {
  return subsectionsWidths
    .slice(0, dividerIndex)
    .reduce((combinedWidths, width) => {
      return combinedWidths + width;
    }, 0);
}

type ResizableProps = {
  children: JSX.Element[];
  minWidth?: number;
};

function Resizable({ children, minWidth = 100 }: ResizableProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Number of provided subsections
  const subsectionCount = React.Children.count(children);
  // Index of currently dragged splitter, starts with 0
  // No splitter is being dragged if it's null
  // Required to calculate widths of adjacent subsections, e.g. splitter with index 1 is between subsection 1 and 2
  const currentDividerIndex = useRef<number | null>(null);
  // Array of widths (in pixels) of all subsections
  const [subsectionsWidths, setSubsectionsWidths] = useState(
    Array(subsectionCount).fill(0),
  );

  useEffect(() => {
    if (wrapperRef.current) {
      // Equally split widths of all subsections to fill width of the whole container
      const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
      const singleElementWidth =
        (wrapperWidth - DIVIDER_WIDTH * (subsectionCount - 1)) /
        subsectionCount;
      setSubsectionsWidths(Array(subsectionCount).fill(singleElementWidth));
    }
  }, [subsectionCount]);

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (currentDividerIndex.current === null) {
        return;
      }

      if (wrapperRef.current) {
        event.stopPropagation();
        event.preventDefault(); // Prevents text from being selected

        setSubsectionsWidths((previousWidths) => {
          if (wrapperRef.current && currentDividerIndex.current !== null) {
            const updatedWidths = previousWidths;
            const dividerIndex = currentDividerIndex.current;
            const wrapperBoundingBox =
              wrapperRef.current.getBoundingClientRect();

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
              updatedWidths[currentDividerIndex.current] =
                previousWidths[dividerIndex] - difference;
              updatedWidths[currentDividerIndex.current + 1] =
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
    },
    [handleDrag],
  );

  const handleStartDrag = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      event.stopPropagation();
      currentDividerIndex.current = index;

      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleStopDrag);
    },
    [handleDrag, handleStopDrag],
  );

  return (
    <Container ref={wrapperRef}>
      {Children.map(children, (child, index) => {
        if (index < subsectionCount - 1) {
          return (
            <>
              <Subsection width={subsectionsWidths[index]}>{child}</Subsection>
              <Divider onStartDrag={(event) => handleStartDrag(event, index)} />
            </>
          );
        }
        return <Subsection isLast>{child}</Subsection>;
      })}
    </Container>
  );
}

export default Resizable;
