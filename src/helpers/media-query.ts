import { tokens } from '../tokens';

type Breakpoints = typeof tokens.breakpoints;

type Breakpoint = Breakpoints[keyof Breakpoints];

function mediaQueryFromBreakpoint(breakpoint: Breakpoint) {
  return `@media screen and (min-width: ${breakpoint})`;
}

const mediaQuery = {
  aboveSmall: mediaQueryFromBreakpoint(tokens.breakpoints.small),
  aboveMedium: mediaQueryFromBreakpoint(tokens.breakpoints.medium),
  aboveLarge: mediaQueryFromBreakpoint(tokens.breakpoints.large),
} as const;

export default mediaQuery;
