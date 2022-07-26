import {
  combinePanelsDimensions,
  calculateProportianalDimensions,
  splitDimensionEqually,
  areInitialProportionsEqual,
  round,
  calculateProportionsFromDimensions,
} from '../utils';

describe('combinePanelsDimensions', () => {
  const testSubsectionsDimensions = [103.45, 180, 255.43, 242];

  it('combine dimensions for given index', () => {
    expect(combinePanelsDimensions(testSubsectionsDimensions, 2)).toEqual(
      283.45,
    );
  });

  it('return 0 for first index', () => {
    expect(combinePanelsDimensions(testSubsectionsDimensions, 0)).toEqual(0);
  });

  it('combine dimensions for the last index', () => {
    expect(
      combinePanelsDimensions(
        testSubsectionsDimensions,
        testSubsectionsDimensions.length - 1,
      ),
    ).toEqual(538.88);
  });
});

describe('calculateProportianalDimensions', () => {
  it('calculate proportions taking divider size into account', () => {
    expect(calculateProportianalDimensions(612, [1, 1, 2], 100)).toEqual([
      149.5, 146, 302.5,
    ]);
  });

  it('each subsection should have at least minimal width', () => {
    expect(calculateProportianalDimensions(388, [30, 30, 60], 100)).toEqual([
      100, 100, 190.5,
    ]);
  });
});

describe('splitDimensionEqually', () => {
  it('split size into equal chunks', () => {
    expect(splitDimensionEqually(950, 3)).toEqual([312, 312, 312]);
  });
});

describe('areInitialProportionsEqual', () => {
  it('return true if two arrays contain exactly same values', () => {
    expect(areInitialProportionsEqual([30, 40, 60], [30, 40, 60])).toBe(true);
    expect(
      areInitialProportionsEqual(
        [1.25, 0.452, 11, 67.43],
        [1.25, 0.452, 11, 67.43],
      ),
    ).toBe(true);
  });

  it('return false if two arrays do not contain exactly same values', () => {
    expect(areInitialProportionsEqual([30, 40, 60], [3, 4, 6])).toBe(false);
    expect(
      areInitialProportionsEqual(
        [1.25, 0.452, 11, 67.43],
        [1.25, 0.452, 11, 4.452],
      ),
    ).toBe(false);
  });
});

describe('round', () => {
  it('round a number up to 2 decimal places', () => {
    expect(round(11.458789623)).toEqual(11.46);
    expect(round(200)).toEqual(200);
    expect(round(15.3)).toEqual(15.3);
    expect(round(42.42)).toEqual(42.42);
    expect(round(42.488)).toEqual(42.49);
  });
});

describe('calculateProportionsFromDimensions', () => {
  it('calculate percentage proportions from provided pixel sizes', () => {
    expect(calculateProportionsFromDimensions([100, 200, 300])).toEqual([
      16.86, 33.71, 49.43,
    ]);
  });
});
