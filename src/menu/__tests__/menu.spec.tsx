import React, { forwardRef } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { User, Checkmark } from '../../icon';
import { Menu, useMenu } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

type MenuTriggerProps = {
  inverted?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function MenuTriggerInternal(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { inverted, ...restProps }: MenuTriggerProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { isOpen } = useMenu();

  return (
    <button {...restProps} ref={ref} data-testid="menu-trigger">
      {isOpen ? 'Close' : 'Open'} Menu
    </button>
  );
}

const MenuTrigger = forwardRef(MenuTriggerInternal);

type TestComponentProps = {
  to: string;
} & React.ComponentPropsWithoutRef<'a'>;

function TestComponentInternal(
  { children, to, ...restProps }: TestComponentProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return (
    <a href={to} ref={ref} {...restProps}>
      {children}
    </a>
  );
}

const TestComponent = forwardRef(TestComponentInternal);

describe('Menu', () => {
  it('renders trigger with proper a11y attributes when closed', () => {
    const { getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
        <Menu.Item>Justin Bieber</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');

    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).not.toHaveAttribute('aria-expanded');
    expect(trigger).toBeInTheDocument();
  });

  it('renders trigger and dropdown with proper content and a11y attributes when opened', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <Menu trigger={<MenuTrigger />}>
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
      <Menu trigger={<MenuTrigger />}>
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

  it('trigger could be customised with useMenu hook', () => {
    const { getByTestId } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
      </Menu>,
    );

    const trigger = getByTestId('menu-trigger');

    expect(trigger).toHaveTextContent('Open Menu');

    fireEvent.click(trigger);

    expect(trigger).toHaveTextContent('Close Menu');
  });

  it('category and its label are associacted by same ID', () => {
    const { getByTestId, getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Category label="Singers" noDivider data-testid="singers-category">
          <Menu.Item>Taylor Swift</Menu.Item>
          <Menu.Item>Ariana Grande</Menu.Item>
        </Menu.Category>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const label = getByText('Singers');
    const category = getByTestId('singers-category');

    expect(label).toHaveAttribute('id', `menu-category-${MOCKED_ID}`);
    expect(category).toHaveAttribute(
      'aria-labelledby',
      `menu-category-${MOCKED_ID}`,
    );
  });

  it('menu item could be decorated with left and right icon', () => {
    const { getByTestId, getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item
          iconLeft={<User data-testid="left-icon" />}
          iconRight={<Checkmark data-testid="right-icon" />}
        >
          Taylor Swift
        </Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);

    const itemWithIcons = getByText('Taylor Swift').closest('button');
    const leftIcon = getByTestId('left-icon');
    const rightIcon = getByTestId('right-icon');

    expect(itemWithIcons).toContainElement(leftIcon);
    expect(itemWithIcons).toContainElement(rightIcon);
  });

  it('menu item could be decorated with alert notification dot', () => {
    const { getByTestId, getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item showAlert>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);

    const item = getByText('Taylor Swift').closest('button');
    const dot = getByTestId('alert-dot');

    expect(item).toContainElement(dot);
  });

  it('when menu is already opened, clicking trigger closes it', () => {
    const { getByText, queryByRole } = render(
      <Menu trigger={<MenuTrigger />}>
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
      <Menu trigger={<MenuTrigger />}>
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

  it('when menu is already opened, clicking menu button closes it', () => {
    const { getByText, queryByRole } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item>Taylor Swift</Menu.Item>
        <Menu.Item>Ariana Grande</Menu.Item>
        <Menu.Button>See More</Menu.Button>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const menuButton = getByText('See More');
    fireEvent.click(menuButton);
    const dropdown = queryByRole('menu');

    expect(dropdown).not.toBeInTheDocument();
  });

  it('menu item could be rendered as a link', () => {
    const { getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item as="a" href="http://taylor-swift.com">
          Taylor Swift Link
        </Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const item = getByText('Taylor Swift Link').closest('a');

    expect(item).toHaveAttribute('href', 'http://taylor-swift.com');
  });

  it('menu item requires props owned by custom component passed into "as" prop', () => {
    const { getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Item as={TestComponent} to="http://polymorphic-taylor-swift.com">
          Polymorphic Taylor Swift Link
        </Menu.Item>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const item = getByText('Polymorphic Taylor Swift Link').closest('a');

    expect(item).toHaveAttribute('href', 'http://polymorphic-taylor-swift.com');
  });

  it('renders snapshot with categories, active style, icons, and alert dot', () => {
    const { getByRole, getByText } = render(
      <Menu trigger={<MenuTrigger />}>
        <Menu.Category label="Singers" noDivider>
          <Menu.Item showAlert>Taylor Swift</Menu.Item>
          <Menu.Item iconLeft={<Checkmark />} iconRight={<Checkmark />}>
            Ariana Grande
          </Menu.Item>
          <Menu.Item isActive>Justin Bieber</Menu.Item>
        </Menu.Category>
        <Menu.Category>
          <Menu.Button>Log Out</Menu.Button>
        </Menu.Category>
      </Menu>,
    );

    const trigger = getByText('Open Menu');
    fireEvent.click(trigger);
    const menu = getByRole('menu');

    expect(menu).toMatchSnapshot();
  });
});
