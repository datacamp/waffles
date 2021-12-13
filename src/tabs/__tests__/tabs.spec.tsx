import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddCircle } from '../../icon';
import { Tabs } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

type ControlledTabsProps = {
  onFirstTabFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onFirstTabClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function ControlledTabs({
  onFirstTabFocus,
  onFirstTabClick,
}: ControlledTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Tabs
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab
        onFocus={onFirstTabFocus}
        onClick={onFirstTabClick}
        label="Taylor Tab"
        data-testid="taylor-tab"
      >
        Content of the first tab.
      </Tabs.Tab>
      <Tabs.Tab label="Ariana Tab" data-testid="ariana-tab">
        Content of the second tab.
      </Tabs.Tab>
      <Tabs.Tab label="Justin Tab" data-testid="justin-tab">
        Content of the third tab.
      </Tabs.Tab>
    </Tabs>
  );
}

function CustomKeysTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>('ariana');

  return (
    <Tabs
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab key="taylor" label="Taylor Tab" data-testid="taylor-tab">
        Content of the first tab.
      </Tabs.Tab>
      <Tabs.Tab key="ariana" label="Ariana Tab" data-testid="ariana-tab">
        Content of the second tab.
      </Tabs.Tab>
      <Tabs.Tab key="justin" label="Justin Tab" data-testid="justin-tab">
        Content of the third tab.
      </Tabs.Tab>
    </Tabs>
  );
}

function AutoActivateTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Tabs
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
      autoActivate
    >
      <Tabs.Tab label="Taylor Tab" data-testid="taylor-tab">
        Content of the first tab.
      </Tabs.Tab>
      <Tabs.Tab label="Ariana Tab" data-testid="ariana-tab">
        Content of the second tab.
      </Tabs.Tab>
      <Tabs.Tab label="Justin Tab" data-testid="justin-tab">
        Content of the third tab.
      </Tabs.Tab>
    </Tabs>
  );
}

describe('Tabs', () => {
  it('renders tabs', () => {
    const { getByRole, getAllByRole } = render(<ControlledTabs />);

    const tabList = getByRole('tablist');
    const tabs = getAllByRole('tab');

    expect(tabList).toBeInTheDocument();
    expect(tabs).toHaveLength(3);
  });

  it("after clicking a tab, it's content is displayed in appropriate tab panel", () => {
    const { getByTestId, getByText } = render(<ControlledTabs />);

    const tab = getByTestId('ariana-tab');
    fireEvent.click(tab);
    const tabContent = getByText('Content of the second tab.');

    expect(tabContent).toBeInTheDocument();
  });

  it('tabs and tab panels have approriate a11y attributes', () => {
    const { getByTestId, getByText } = render(<ControlledTabs />);

    const inactiveTab = getByTestId('taylor-tab');
    const activeTab = getByTestId('justin-tab');
    fireEvent.click(activeTab);
    const activeTabPanel = getByText('Content of the third tab.');

    expect(inactiveTab).toHaveAttribute('tabindex', '-1');
    expect(inactiveTab).toHaveAttribute('aria-selected', 'false');
    expect(activeTab).toHaveAttribute('tabindex', '0');
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
    expect(activeTab).toHaveAttribute('id', `tabs-${MOCKED_ID}-tab-2`);
    expect(activeTab).toHaveAttribute(
      'aria-controls',
      `tabs-${MOCKED_ID}-tab-panel-2`,
    );
    expect(activeTabPanel).toHaveAttribute('role', 'tabpanel');
    expect(activeTabPanel).toHaveAttribute(
      'aria-labelledby',
      `tabs-${MOCKED_ID}-tab-2`,
    );
  });

  it('tab could be disabled', () => {
    const { getByTestId } = render(
      <Tabs activeTab={0}>
        <Tabs.Tab label="Taylor Tab" data-testid="taylor-tab">
          Content of the first tab.
        </Tabs.Tab>
        <Tabs.Tab label="Disabled Ariana Tab" data-testid="ariana-tab" disabled>
          Content of the second tab.
        </Tabs.Tab>
      </Tabs>,
    );

    const disabledTab = getByTestId('ariana-tab');
    expect(disabledTab).toBeDisabled();
  });

  it('tab could be rendered as a link', () => {
    const { container } = render(
      <Tabs activeTab={0}>
        <Tabs.Tab as="a" href="http://taylorswift.com" label="Taylor Tab">
          Content of the first tab.
        </Tabs.Tab>
        <Tabs.Tab as="a" href="http://ariana-grande.io" label="Ariana Tab">
          Content of the second tab.
        </Tabs.Tab>
      </Tabs>,
    );

    const linkTab = container.querySelectorAll('a')[0];

    expect(linkTab).toBeInTheDocument();
    expect(linkTab).toHaveTextContent('Taylor Tab');
    expect(linkTab).toHaveAttribute('href', 'http://taylorswift.com');
  });

  it("an icon is rendered next to the tab's label", () => {
    const { container, getByTestId } = render(
      <Tabs activeTab={0}>
        <Tabs.Tab
          icon={<AddCircle size="xsmall" />}
          label="Taylor Tab"
          data-testid="taylor-tab"
        >
          Content of the first tab.
        </Tabs.Tab>
        <Tabs.Tab label="Disabled Ariana Tab" data-testid="ariana-tab" disabled>
          Content of the second tab.
        </Tabs.Tab>
      </Tabs>,
    );

    const tab = getByTestId('taylor-tab');
    const icon = container.querySelector('svg');

    expect(tab).toBeInTheDocument();
    expect(tab).toContainElement(icon);
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });

  it('focus on tab element is handled correctly', () => {
    const handleFocus = jest.fn();
    render(<ControlledTabs onFirstTabFocus={handleFocus} />);

    userEvent.tab();

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('click on tab element is handled correctly', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <ControlledTabs onFirstTabClick={handleClick} />,
    );

    const firstTab = getByTestId('taylor-tab');
    fireEvent.click(firstTab);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('custom key value could be used to index tabs instead of default number', () => {
    const { getByTestId, getByText } = render(<CustomKeysTabs />);

    const defaultTab = getByTestId('ariana-tab');

    expect(defaultTab).toHaveAttribute('aria-selected', 'true');

    const activeTab = getByTestId('justin-tab');
    fireEvent.click(activeTab);
    const activeTabPanel = getByText('Content of the third tab.');

    expect(activeTab).toHaveAttribute('aria-selected', 'true');
    expect(activeTabPanel).toBeInTheDocument();
  });

  it('if autoActivate prop is passed, when tab is focused with arrow key, the appropriate panel is shown', () => {
    const { getByText } = render(<AutoActivateTabs />);

    userEvent.tab(); // focus first tab
    userEvent.keyboard('{arrowright}'); // focus second tab
    userEvent.keyboard('{arrowright}'); // focus third tab
    const activeTabPanel = getByText('Content of the third tab.');

    expect(activeTabPanel).toBeInTheDocument();
  });

  it('it is possible to cycle through tabs when using right arrow key', () => {
    const { getByText } = render(<AutoActivateTabs />);

    userEvent.tab(); // focus first tab
    userEvent.keyboard('{arrowright}'); // focus second tab
    userEvent.keyboard('{arrowright}'); // focus the last, third tab
    userEvent.keyboard('{arrowright}'); // focus first tab again
    const activeTabPanel = getByText('Content of the first tab.');

    expect(activeTabPanel).toBeInTheDocument();
  });

  it('it is possible to cycle through tabs when using left arrow key', () => {
    const { getByText } = render(<AutoActivateTabs />);

    userEvent.tab(); // focus first tab
    userEvent.keyboard('{arrowright}'); // focus second tab
    userEvent.keyboard('{arrowleft}'); // focus first tab again
    userEvent.keyboard('{arrowleft}'); // focus the last, third tab
    const activeTabPanel = getByText('Content of the third tab.');

    expect(activeTabPanel).toBeInTheDocument();
  });

  it('the last tab is selected, after the End key is pressed', () => {
    const { getByText } = render(<AutoActivateTabs />);

    userEvent.tab(); // focus first tab
    userEvent.keyboard('{end}'); // focus the last tab
    const activeTabPanel = getByText('Content of the third tab.');

    expect(activeTabPanel).toBeInTheDocument();
  });

  it('the first tab is selected, after the Home key is pressed', () => {
    const { getByText } = render(<AutoActivateTabs />);

    userEvent.tab(); // focus first tab
    userEvent.keyboard('{end}'); // focus the last tab
    userEvent.keyboard('{home}'); // focus first tab
    const activeTabPanel = getByText('Content of the first tab.');

    expect(activeTabPanel).toBeInTheDocument();
  });

  it('renders snapshot', () => {
    const { getByRole } = render(
      <Tabs activeTab={0}>
        <Tabs.Tab label="First Tab">Content of the first tab.</Tabs.Tab>
        <Tabs.Tab label="Second Tab">Content of the second tab.</Tabs.Tab>
      </Tabs>,
    );

    const tabList = getByRole('tablist');

    expect(tabList).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { getByRole } = render(
      <Tabs activeTab={0} inverted>
        <Tabs.Tab label="First Tab">Content of the first tab.</Tabs.Tab>
        <Tabs.Tab label="Second Tab">Content of the second tab.</Tabs.Tab>
      </Tabs>,
    );

    const tabList = getByRole('tablist');

    expect(tabList).toMatchSnapshot();
  });
});
