import { render } from '@testing-library/react';

import { ContentContainer } from '../index';

describe('ContentContainer', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ContentContainer data-testid="container">
        Unofficial Fanpage of Taylor Swift
      </ContentContainer>,
    );

    const contentContainer = getByTestId('container');

    expect(contentContainer).toMatchSnapshot();
  });

  it('renders correctly when noSidebar flag is passed', () => {
    const { getByRole } = render(
      <ContentContainer role="main" noSidebar>
        Unofficial Fanpage of Taylor Swift
      </ContentContainer>,
    );

    const contentContainer = getByRole('main');

    expect(contentContainer).toMatchSnapshot();
  });
});
