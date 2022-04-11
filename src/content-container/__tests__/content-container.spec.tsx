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
});
