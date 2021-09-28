import { tokens } from '../tokens';

type Breakpoints = typeof tokens.breakpoints;

type Breakpoint = Breakpoints[keyof Breakpoints];

type MediaQueries = {
  readonly [key in keyof Breakpoints]: string;
};

function mediaQueryFromBreakpoint(breakpoint: Breakpoint) {
  return `@media screen and (min-width: ${breakpoint})`;
}

function generatedMediaQueries(breakpoints: Breakpoints) {
  return Object.keys(breakpoints).reduce((mediaQueries, breakpoint) => {
    return {
      ...mediaQueries,
      [breakpoint]: mediaQueryFromBreakpoint(
        breakpoints[breakpoint as keyof Breakpoints],
      ),
    };
  }, {} as MediaQueries);
}

const mediaQuery = generatedMediaQueries(tokens.breakpoints);

export default mediaQuery;
