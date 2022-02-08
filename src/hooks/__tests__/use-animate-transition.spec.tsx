import { useState } from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';

import { useAnimateTransition } from '../index';

function TestComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const isAnimating = useAnimateTransition(isVisible, 300);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Animation</button>
      {isAnimating ? <div>Animating Element</div> : <div>Initial Element</div>}
    </>
  );
}

describe('useAnimateTransition', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('show correct element initially', () => {
    const { queryByText } = render(<TestComponent />);

    const animatingElement = queryByText('Animating Element');
    const initialElement = queryByText('Initial Element');

    expect(animatingElement).not.toBeInTheDocument();
    expect(initialElement).toBeInTheDocument();
  });

  it('show correct element when visiblity is toggled on', async () => {
    const { queryByText, getByText } = render(<TestComponent />);

    const button = getByText('Toggle Animation');
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    let animatingElement;
    await waitFor(() => {
      animatingElement = getByText('Animating Element');
    });
    const initialElement = queryByText('Initial Element');

    expect(animatingElement).toBeInTheDocument();
    expect(initialElement).not.toBeInTheDocument();
  });

  it("show correct element when visiblity is toggled off, but the time set in timeout hasn't passed yet", async () => {
    const { queryByText, getByText } = render(<TestComponent />);

    const button = getByText('Toggle Animation');
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    fireEvent.click(button);

    // Time passed is less than the value set as timeout
    act(() => {
      jest.advanceTimersByTime(100);
    });

    let animatingElement;
    await waitFor(() => {
      animatingElement = getByText('Animating Element');
    });
    const initialElement = queryByText('Initial Element');

    expect(animatingElement).toBeInTheDocument();
    expect(initialElement).not.toBeInTheDocument();
  });

  it('show correct element when visiblity is toggled off, and the time set in timeout passed', async () => {
    const { queryByText, getByText } = render(<TestComponent />);

    const button = getByText('Toggle Animation');
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    fireEvent.click(button);

    // Let the delayed component unmounting finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let initialElement;
    await waitFor(() => {
      initialElement = getByText('Initial Element');
    });
    const animatingElement = queryByText('Animating Element');

    expect(animatingElement).not.toBeInTheDocument();
    expect(initialElement).toBeInTheDocument();
  });
});
