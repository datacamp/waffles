import { render, fireEvent } from '@testing-library/react';

import { NotificationCard } from '../index';

const variants = ['default', 'success', 'warning', 'error', 'upgrade'] as const;

describe('NotificationCard', () => {
  it('renders content', () => {
    const { getByText } = render(
      <NotificationCard>Notification Test Content</NotificationCard>,
    );

    const content = getByText('Notification Test Content');

    expect(content).toBeInTheDocument();
  });

  it('renders close button when closable flag is passed', () => {
    const { getByLabelText } = render(
      <NotificationCard closable>Test</NotificationCard>,
    );

    const button = getByLabelText('Close notification');

    expect(button).toBeInTheDocument();
  });

  it('handles click event on the close button correctly', () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(
      <NotificationCard closable onClose={handleClick}>
        Test
      </NotificationCard>,
    );

    const button = getByLabelText('Close notification');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the notification', () => {
    const { getByTestId } = render(
      <NotificationCard data-testid="test-notification">Test</NotificationCard>,
    );

    const card = getByTestId('test-notification');

    expect(card).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      it(`variant ${variant}`, () => {
        const { container } = render(
          <NotificationCard variant={variant} closable>
            Test
          </NotificationCard>,
        );

        const notification = container.querySelector('section');

        expect(notification).toMatchSnapshot();
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    variants.forEach((variant) => {
      it(`variant ${variant}`, () => {
        const { container } = render(
          <NotificationCard variant={variant} inverted closable>
            Test
          </NotificationCard>,
        );

        const notification = container.querySelector('section');

        expect(notification).toMatchSnapshot();
      });
    });
  });
});
