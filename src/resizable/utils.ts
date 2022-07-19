import { DIVIDER_WIDTH } from './constants';

// Calculate combined width of subsections up to provided index
export function combineSubsectionsWidths(
  subsectionsWidths: number[],
  index: number,
) {
  return subsectionsWidths.slice(0, index).reduce((combinedWidths, width) => {
    return combinedWidths + width;
  }, 0);
}

// Calculate width of each subsection based on provided proiportions
export function calculateProportianalWidths(
  containerWidth: number,
  initialProportions: number[],
  minWidth: number,
) {
  const totalProportions = initialProportions.reduce((total, proportion) => {
    return total + proportion;
  }, 0);

  const singleProportionWidth = containerWidth / totalProportions;

  return initialProportions.map((proportion, index) => {
    // For first and last subsection subtract only half of divider width
    const subtractedWidth =
      index === 0 || index === initialProportions.length - 1
        ? DIVIDER_WIDTH / 2
        : DIVIDER_WIDTH;
    // Don't allow width to be smaller than minWidth
    return Math.max(
      proportion * singleProportionWidth - subtractedWidth,
      minWidth,
    );
  });
}

// Set the same width forf each subsection when initialProportions are not provided
export function splitWidthsEqually(
  containerWidth: number,
  subsectionCount: number,
) {
  const singleElementWidth =
    (containerWidth - DIVIDER_WIDTH * (subsectionCount - 1)) / subsectionCount;
  return Array(subsectionCount).fill(singleElementWidth);
}
