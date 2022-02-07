/* eslint-disable @typescript-eslint/no-empty-function */
import { useRef, useEffect } from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { Star, ChevronRight } from '../../icon';
import { useMediaQuery } from '../../hooks';
import { SideNavigation } from '../index';

const MOCKED_ID = '123abC';

jest.mock('../../hooks', () => {
  return {
    ...jest.requireActual('../../hooks'),
    useMediaQuery: jest.fn(),
    useId: (prefix: string) => {
      return `${prefix}-${MOCKED_ID}`;
    },
  };
});

const useMediaQueryMock = useMediaQuery as jest.Mock;

type TestSideNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

function TestSideNav({ isOpen, onClose }: TestSideNavProps) {
  return (
    <SideNavigation isOpen={isOpen} onClose={onClose}>
      <SideNavigation.Nav>
        <SideNavigation.Category label="Trending" data-testid="main-category">
          <SideNavigation.Item href="#taylor" isActive>
            Taylor Swift
          </SideNavigation.Item>
          <SideNavigation.Item href="#ariana" isNew>
            Ariana Grande
          </SideNavigation.Item>
          <SideNavigation.Item
            href="#justin"
            iconLeft={<Star data-testid="left-icon" />}
            iconRight={<ChevronRight data-testid="right-icon" />}
          >
            Justin Bieber
          </SideNavigation.Item>
          <SideNavigation.Subcategory label="Classics">
            <SideNavigation.Item href="#led-zeppelin">
              Led Zeppelin
            </SideNavigation.Item>
            <SideNavigation.Item
              href="#pink-floyd"
              iconLeft={<Star data-testid="sub-item-left-icon" />}
              iconRight={<ChevronRight data-testid="sub-item-right-icon" />}
            >
              Pink Floyd
            </SideNavigation.Item>
          </SideNavigation.Subcategory>
          <SideNavigation.Subcategory
            label="New Age"
            iconLeft={<Star data-testid="sub-left-icon" />}
            iconRight={<ChevronRight data-testid="sub-right-icon" />}
          >
            <SideNavigation.Item href="#greta-van-fleet">
              Greta Van Fleet
            </SideNavigation.Item>
          </SideNavigation.Subcategory>
        </SideNavigation.Category>
      </SideNavigation.Nav>
    </SideNavigation>
  );
}

type TestComponentProps = {
  to: string;
} & React.ComponentPropsWithoutRef<'a'>;

function TestComponent({ children, to, ...restProps }: TestComponentProps) {
  return (
    <a href={to} {...restProps}>
      {children}
    </a>
  );
}

function PolymorphicTestSideNav({ isOpen, onClose }: TestSideNavProps) {
  return (
    <>
      <SideNavigation isOpen={isOpen} onClose={onClose}>
        <SideNavigation.Nav>
          <SideNavigation.Category label="Trending">
            <SideNavigation.Item as={TestComponent} to="#taylor" isActive>
              Taylor Swift
            </SideNavigation.Item>
            <SideNavigation.Subcategory
              label="Classics"
              as={TestComponent}
              to="#classics"
            >
              <SideNavigation.Item as="button">
                Led Zeppelin
              </SideNavigation.Item>
            </SideNavigation.Subcategory>
          </SideNavigation.Category>
        </SideNavigation.Nav>
      </SideNavigation>
    </>
  );
}

function TestRefItem() {
  const itemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    itemRef.current?.focus();
  }, []);

  return (
    <SideNavigation.Item ref={itemRef} href="/test">
      Focused With Ref
    </SideNavigation.Item>
  );
}

describe('SideNavigation', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    useMediaQueryMock.mockReturnValue({
      isAboveSmall: true,
      isAboveMedium: false,
      isAboveLarge: false,
    });
  });

  it('category and its items are associacted by same ID', () => {
    const { getByTestId } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const category = getByTestId('main-category');
    const categoryLabel = category.querySelector('h2');
    const list = category.querySelector('ul');
    const categoryId = `menu-category-${MOCKED_ID}`;

    expect(categoryLabel).toHaveAttribute('id', categoryId);
    expect(list).toHaveAttribute('aria-labelledby', categoryId);
  });

  it('subcategory and its items are associacted by same ID', () => {
    const { getByText } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const subcategoryLabel = getByText('Classics').closest('h2');
    const list = subcategoryLabel?.closest('li')?.querySelector('ul');
    const categoryId = `menu-subcategory-${MOCKED_ID}`;

    expect(subcategoryLabel).toHaveAttribute('id', categoryId);
    expect(list).toHaveAttribute('aria-labelledby', categoryId);
  });

  it('active link has correct aria attribute', () => {
    const { getByText } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const activeLink = getByText('Taylor Swift').closest('a');

    expect(activeLink).toHaveAttribute('href', '#taylor');
    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });

  it('nav item could be rendered as a button', () => {
    const { container } = render(
      <PolymorphicTestSideNav isOpen={true} onClose={() => {}} />,
    );

    const item = container.querySelector('button');
    expect(item).toHaveTextContent('Led Zeppelin');
  });

  it('nav item requires props owned by custom component passed into "as" prop', () => {
    const { getByText } = render(
      <PolymorphicTestSideNav isOpen={true} onClose={() => {}} />,
    );

    const item = getByText('Taylor Swift').closest('a');
    expect(item).toHaveAttribute('href', '#taylor');
  });

  it('nav subcategory requires props owned by custom component passed into "as" prop', () => {
    const { getByText } = render(
      <PolymorphicTestSideNav isOpen={true} onClose={() => {}} />,
    );

    const subcategoryAsLink = getByText('Classics').closest('a');
    expect(subcategoryAsLink).toHaveAttribute('href', '#classics');
  });

  it('nav subcategory could be decorated with left and right icon', () => {
    const { getByText, getByTestId } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const subcategoryWithIcons = getByText('New Age').closest('h2');
    const leftIcon = getByTestId('sub-left-icon');
    const rightIcon = getByTestId('sub-right-icon');

    expect(subcategoryWithIcons).toContainElement(leftIcon);
    expect(subcategoryWithIcons).toContainElement(rightIcon);
  });

  it('nav item could be decorated with left and right icon', () => {
    const { getByText, getByTestId } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const itemWithIcons = getByText('Justin Bieber').closest('a');
    const leftIcon = getByTestId('left-icon');
    const rightIcon = getByTestId('right-icon');

    expect(itemWithIcons).toContainElement(leftIcon);
    expect(itemWithIcons).toContainElement(rightIcon);
  });

  it('for subcategory nav item only right icon is visible', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const itemWithIcons = getByText('Pink Floyd').closest('a');
    const leftIcon = queryByTestId('sub-item-left-icon');
    const rightIcon = getByTestId('sub-item-right-icon');

    expect(itemWithIcons).toContainElement(rightIcon);
    expect(leftIcon).not.toBeInTheDocument();
  });

  it('when item is new, show appropriate indicator', () => {
    const { getByText, getByTestId } = render(
      <TestSideNav isOpen={true} onClose={() => {}} />,
    );

    const newItem = getByText('Ariana Grande').closest('a');
    const indicator = getByTestId('new-item-indicator');

    expect(newItem).toContainElement(indicator);
  });

  // Mobile
  describe('below small breakpoint', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.resetAllMocks();

      useMediaQueryMock.mockReturnValue({
        isAboveSmall: false,
        isAboveMedium: false,
        isAboveLarge: false,
      });
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('is not visible when isOpen is set to false', () => {
      const { container, queryByTestId } = render(
        <TestSideNav isOpen={false} onClose={() => {}} />,
      );

      const nav = container.querySelector('nav');
      const overlay = queryByTestId('side-navigation-menu-overlay');

      expect(nav).not.toBeInTheDocument();
      expect(overlay).not.toBeInTheDocument();
    });

    it('is visible when isOpen is set to true', async () => {
      const { getByTestId, getByLabelText } = render(
        <TestSideNav isOpen={true} onClose={() => {}} />,
      );

      // Let all animations finish
      act(() => {
        jest.advanceTimersByTime(500);
      });

      let overlay;
      await waitFor(() => {
        overlay = getByTestId('side-navigation-menu-overlay');
      });
      const closeButton = getByLabelText('Close');

      expect(overlay).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });

    it('when close button is clicked, onClose handler is called', async () => {
      const handleOnClose = jest.fn();
      const { getByLabelText } = render(
        <TestSideNav isOpen={true} onClose={handleOnClose} />,
      );

      act(() => {
        jest.advanceTimersByTime(500);
      });

      let closeButton;
      await waitFor(() => {
        closeButton = getByLabelText('Close');
      });
      closeButton && fireEvent.click(closeButton);

      expect(handleOnClose).toHaveBeenCalledTimes(1);
    });

    it('when nav item is clicked, onClose handler is called', async () => {
      const handleOnClose = jest.fn();
      const { getByText } = render(
        <TestSideNav isOpen={true} onClose={handleOnClose} />,
      );

      act(() => {
        jest.advanceTimersByTime(500);
      });

      let navItem;
      await waitFor(() => {
        navItem = getByText('Ariana Grande').closest('a');
      });
      navItem && fireEvent.click(navItem);

      expect(handleOnClose).toHaveBeenCalledTimes(1);
    });

    it('when overlay is clicked, onClose handler is called', async () => {
      const handleOnClose = jest.fn();
      const { getByTestId } = render(
        <TestSideNav isOpen={true} onClose={handleOnClose} />,
      );

      act(() => {
        jest.advanceTimersByTime(500);
      });

      let overlay;
      await waitFor(() => {
        overlay = getByTestId('side-navigation-menu-overlay');
      });
      overlay && fireEvent.click(overlay);

      expect(handleOnClose).toHaveBeenCalledTimes(1);
    });
  });

  // Tablet & Desktop
  describe('above small breakpoint', () => {
    beforeEach(() => {
      jest.resetAllMocks();

      useMediaQueryMock.mockReturnValue({
        isAboveSmall: true,
        isAboveMedium: true,
        isAboveLarge: true,
      });
    });

    it('is always visible, even when isOpen is set to false', () => {
      const { container, queryByTestId, queryByLabelText } = render(
        <TestSideNav isOpen={false} onClose={() => {}} />,
      );

      const nav = container.querySelector('nav');
      const categories = container.querySelectorAll('h2');
      const links = container.querySelectorAll('a');
      const overlay = queryByTestId('side-navigation-menu-overlay');
      const closeButton = queryByLabelText('Close');

      expect(nav).toBeInTheDocument();
      expect(categories).toHaveLength(3);
      expect(links).toHaveLength(6);
      expect(overlay).not.toBeInTheDocument();
      expect(closeButton).not.toBeInTheDocument();
    });

    it('when nav item is clicked, onClose handler is NOT called', () => {
      const handleOnClose = jest.fn();
      const { getByText } = render(
        <TestSideNav isOpen={true} onClose={handleOnClose} />,
      );

      const navItem = getByText('Ariana Grande').closest('a');
      navItem && fireEvent.click(navItem);

      expect(handleOnClose).toHaveBeenCalledTimes(0);
    });
  });

  it('for nav item click is handled correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <SideNavigation.Item href="#taylor" onClick={handleClick}>
        Taylor Swift
      </SideNavigation.Item>,
    );

    const item = getByText('Taylor Swift').closest('a');
    item && fireEvent.click(item);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('for nav subcategory click is handled correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <SideNavigation.Subcategory
        label="Trending"
        as="a"
        href="#taylor"
        onClick={handleClick}
      >
        Test
      </SideNavigation.Subcategory>,
    );

    const item = getByText('Trending').closest('a');
    item && fireEvent.click(item);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('for nav item focus is handled correctly', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <SideNavigation.Item href="#taylor" onFocus={handleFocus}>
        Taylor Swift
      </SideNavigation.Item>,
    );

    const item = getByText('Taylor Swift').closest('a');
    item && fireEvent.focus(item);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('for nav subcategory focus is handled correctly', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <SideNavigation.Subcategory
        label="Trending"
        as="a"
        href="#taylor"
        onFocus={handleFocus}
      >
        Test
      </SideNavigation.Subcategory>,
    );

    const item = getByText('Trending').closest('a');
    item && fireEvent.focus(item);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('nav item accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefItem />);

    const item = container.querySelector('a');

    expect(item).toHaveFocus();
  });

  // Snapshots

  it('renders snapshot of category with label and divider', () => {
    const { container } = render(
      <SideNavigation.Category label="Category">Test</SideNavigation.Category>,
    );

    const category = container.firstChild;

    expect(category).toMatchSnapshot();
  });

  it('renders snapshot of category without label nor divider', () => {
    const { container } = render(
      <SideNavigation.Category>Test</SideNavigation.Category>,
    );

    const category = container.firstChild;

    expect(category).toMatchSnapshot();
  });

  it('renders snapshot of the small item', () => {
    const { container } = render(
      <SideNavigation.Item size="small" href="#test">
        Small
      </SideNavigation.Item>,
    );

    const category = container.querySelector('li');

    expect(category).toMatchSnapshot();
  });

  it('renders snapshot of the medium item', () => {
    const { container } = render(
      <SideNavigation.Item size="medium" href="#test">
        Medium
      </SideNavigation.Item>,
    );

    const category = container.querySelector('li');

    expect(category).toMatchSnapshot();
  });

  it('renders snapshot of item focused state', () => {
    const { getByText } = render(
      <SideNavigation.Item href="#test">Focused</SideNavigation.Item>,
    );

    const item = getByText('Focused').closest('a') as HTMLAnchorElement;
    fireEvent.focus(item);

    expect(item).toMatchSnapshot();
  });
});
