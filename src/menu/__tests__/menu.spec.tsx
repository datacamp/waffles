import { render, fireEvent } from '@testing-library/react';

import { Menu } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

describe('Menu', () => {
  it('renders trigger with proper a11y attributes when closed', () => {
    const { getByText } = render(
      <Menu trigger={<button>Open Menu</button>}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
        <Menu.Item>Justin Bieber</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');

    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toBeInTheDocument();
  });

  it('renders trigger and dropdown with proper content and a11y attributes when opened', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <Menu trigger={<button>Open Menu</button>}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
        <Menu.Item>Justin Bieber</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const dropdown = getByRole('menu');
    const menuItems = getAllByRole('menuitem');

    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(menuItems).toHaveLength(3);
  });

  it('trigger and dropdown are associated by the same ID', () => {
    const { getByRole, getByText } = render(
      <Menu trigger={<button>Open Menu</button>}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const dropdown = getByRole('menu');

    expect(trigger).toHaveAttribute('id', `menu-trigger-${MOCKED_ID}`);
    expect(dropdown).toHaveAttribute(
      'aria-labelledby',
      `menu-trigger-${MOCKED_ID}`,
    );
  });

  it('when menu is already opened, clicking trigger closes it', () => {
    const { getByText, queryByRole } = render(
      <Menu trigger={<button>Open Menu</button>}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    const dropdown = queryByRole('menu');

    expect(dropdown).not.toBeInTheDocument();
  });

  it('when menu is already opened, clicking menu item closes it', () => {
    const { getByText, queryByRole } = render(
      <Menu trigger={<button>Open Menu</button>}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
        <Menu.Item>Justin Bieber</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const menuItem = getByText('Ariana Grande');
    fireEvent.click(menuItem);
    const dropdown = queryByRole('menu');

    expect(dropdown).not.toBeInTheDocument();
  });
});
