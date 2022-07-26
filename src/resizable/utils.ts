import { DIVIDER_HITBOX_SIZE } from './constants';

// Calculate combined width or height of panels before provided index
export function combinePanelsDimensions(
  panelsDimensions: number[],
  index: number,
) {
  return panelsDimensions.slice(0, index).reduce((total, size) => {
    return total + size;
  }, 0);
}

// Calculate size of each panel based on provided proportions
export function calculateProportianalDimensions(
  containerSize: number,
  initialProportions: number[],
  minSize: number,
) {
  const totalProportions = initialProportions.reduce((total, proportion) => {
    return total + proportion;
  }, 0);

  const singleProportionSize = containerSize / totalProportions;

  return initialProportions.map((proportion, index) => {
    // For first and last panel subtract only half of divider size
    const subtractedSize =
      index === 0 || index === initialProportions.length - 1
        ? DIVIDER_HITBOX_SIZE / 2
        : DIVIDER_HITBOX_SIZE;
    // Don't allow size to be smaller than minSize
    return Math.max(
      proportion * singleProportionSize - subtractedSize,
      minSize,
    );
  });
}

// Set the same size for each panel when initialProportions are not provided
export function splitDimensionEqually(
  containerSize: number,
  panelCount: number,
) {
  const singleElementSize =
    (containerSize - DIVIDER_HITBOX_SIZE * (panelCount - 1)) / panelCount;
  return Array(panelCount).fill(singleElementSize);
}

// Check whether two proportions arrays are equal
// It's safe to use JSON.stringify for primitive types
export function areInitialProportionsEqual(
  previousProportions: number[],
  nextProportions: number[],
) {
  return JSON.stringify(previousProportions) == JSON.stringify(nextProportions);
}

// Round value up to 2 decimal places
export function round(num: number) {
  return Math.round(num * 100) / 100;
}

// Calculate percentage proportions from provided pixel dimensions
// Doesn't have to be super accurate
export function calculateProportionsFromDimensions(panelsDimensions: number[]) {
  // Don't really care about last element, since it will be recalcualted anyway
  const combinedSize =
    panelsDimensions.reduce((total, size) => {
      return total + size;
    }, 0) +
    DIVIDER_HITBOX_SIZE * (panelsDimensions.length - 1);

  const proportions = panelsDimensions.map((size, index) => {
    const actualSize =
      index === 0 ? size + DIVIDER_HITBOX_SIZE / 2 : size + DIVIDER_HITBOX_SIZE;
    const percentage = round((actualSize / combinedSize) * 100);
    return percentage;
  });

  // Make sure all rounded values add up to 100

  proportions.pop();

  const sumOfPercentagesWithoutLast = proportions.reduce(
    (total, percentage) => {
      return total + percentage;
    },
    0,
  );

  return [...proportions, round(100 - sumOfPercentagesWithoutLast)];
}
