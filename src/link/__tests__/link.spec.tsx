import React, { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AddCircle, ExternalLink } from '../../icon';
import { Link } from '../index';

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

function TestRefLink() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    linkRef.current?.focus();
  }, []);

  return (
    <Link href="https://datacamp.com" ref={linkRef}>
      Focused With Ref
    </Link>
  );
}

describe('Link', () => {
  it('renders a link containing the text', () => {
    const { container } = render(
      <Link href="https://taylor-swift-fanclub.com">
        Join Taylor Swift Fanclub
      </Link>,
    );

    const link = container.querySelector('a');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://taylor-swift-fanclub.com');
    expect(link).toHaveTextContent('Join Taylor Swift Fanclub');
  });

  it('sets the data attribute on the link', () => {
    const { getByTestId } = render(
      <Link data-testid="taylors-link">Join Taylor Swift Fanclub</Link>,
    );

    const link = getByTestId('taylors-link');

    expect(link).toBeInTheDocument();
  });

  it('renders left icon', () => {
    const { container, getByText } = render(
      <Link iconLeft={<AddCircle />}>Go to Fanpage</Link>,
    );

    const link = getByText('Go to Fanpage').closest('a');
    const icon = container.querySelector('svg');

    expect(link).toBeInTheDocument();
    expect(link).toContainElement(icon);
  });

  it('renders right icon', () => {
    const { container, getByText } = render(
      <Link iconRight={<ExternalLink />}>Read More</Link>,
    );

    const link = getByText('Read More').closest('a');
    const icon = container.querySelector('svg');

    expect(link).toBeInTheDocument();
    expect(link).toContainElement(icon);
  });

  it('renders both left and right icons', () => {
    const { container, getByText } = render(
      <Link iconLeft={<AddCircle />} iconRight={<ExternalLink />}>
        Go to Another Fanpage
      </Link>,
    );

    const link = getByText('Go to Another Fanpage');
    const icons = container.querySelectorAll('svg');

    expect(link).toBeInTheDocument();
    expect(icons).toHaveLength(2);
  });

  it('renders icon of custom size', () => {
    const { container, getByText } = render(
      <Link iconRight={<ExternalLink size="xsmall" />}>
        Go to Another Fanpage
      </Link>,
    );

    const link = getByText('Go to Another Fanpage').closest('a');
    const icon = container.querySelector('svg');

    expect(link).toBeInTheDocument();
    expect(link).toContainElement(icon);
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });

  it('requires props owned by custom component passed into "as" prop', () => {
    const { container } = render(
      <Link to="http://fanpage.com" as={TestComponent}>
        As a Custom Component
      </Link>,
    );

    const customComponent = container.querySelector('a');

    expect(customComponent).toBeInTheDocument();
    expect(customComponent).toHaveTextContent('As a Custom Component');
    expect(customComponent).toHaveAttribute('href', 'http://fanpage.com');
  });

  it('renders snapshot of focused state', () => {
    const { getByText } = render(<Link href="https://datacamp.com">Test</Link>);

    const link = getByText('Test').closest('a') as HTMLAnchorElement;
    fireEvent.focus(link);

    expect(link).toMatchSnapshot();
  });

  it('accepts ref and could be focused programmatically when link has a "href" attribute', () => {
    const { container } = render(<TestRefLink />);

    const link = container.querySelector('a');

    expect(link).toHaveFocus();
  });

  describe('renders snapshot', () => {
    const { container } = render(
      <Link href="https://taylor-swift-fanclub.com">
        Join Taylor Swift Fanclub
      </Link>,
    );

    const link = container.querySelector('a');

    expect(link).toMatchSnapshot();
  });

  describe('renders snapshot of inverted variant', () => {
    const { container } = render(
      <Link inverted href="https://taylor-swift-fanclub.com">
        Join Taylor Swift Fanclub
      </Link>,
    );

    const link = container.querySelector('a');

    expect(link).toMatchSnapshot();
  });
});
