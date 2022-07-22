import {
  combineSubsectionsDimensions,
  calculateProportianalDimensions,
  splitDimensionEqually,
  round,
  calculateProportionsFromDimensions,
} from '../utils';

describe('combineSubsectionsDimensions', () => {
  const testSubsectionsDimensions = [103.45, 180, 255.43, 242];

  it('combine dimensions for given index', () => {
    expect(combineSubsectionsDimensions(testSubsectionsDimensions, 2)).toEqual(
      283.45,
    );
  });

  it('return 0 for first index', () => {
    expect(combineSubsectionsDimensions(testSubsectionsDimensions, 0)).toEqual(
      0,
    );
  });

  it('combine dimensions for the last index', () => {
    expect(
      combineSubsectionsDimensions(
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
