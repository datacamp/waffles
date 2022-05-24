import { render } from '@testing-library/react';

import * as brands from '../index';

describe('Brand', () => {
  it('exports every Brand component', () => {
    expect(brands).toMatchSnapshot();
  });

  it('renders snapshot of inverted brand components', () => {
    const { container } = render(
      <>
        {Object.entries(brands).map(([name, Brand]) => {
          return <Brand key={name} inverted />;
        })}
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders snapshot of monochrome brand components', () => {
    const { container } = render(
      <>
        {Object.entries(brands).map(([name, Brand]) => {
          return <Brand key={name} monochrome />;
        })}
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders snapshot of inverted monochrome brand components', () => {
    const { container } = render(
      <>
        {Object.entries(brands).map(([name, Brand]) => {
          return <Brand key={name} inverted monochrome />;
        })}
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});
