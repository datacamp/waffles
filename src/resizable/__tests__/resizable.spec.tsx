import { render, fireEvent } from '@testing-library/react';

import { Resizable } from '../index';

describe('Resizable', () => {
  it('renders correct number of subsections and dividers', () => {
    const { getAllByText, getAllByRole } = render(
      <Resizable>
        <p>Taylor Swift Subsection</p>
        <p>Ariana Grande Subsection</p>
        <p>Justin Bieber Subsection</p>
        <p>Jimmy Page Subsection</p>
      </Resizable>,
    );

    const subsections = getAllByText(/subsection/i);
    const dividers = getAllByRole('separator');

    expect(subsections).toHaveLength(4);
    expect(dividers).toHaveLength(3);
  });

  it('call onResizeStart callback when divider has started beign dragged', () => {
    const handleResizeStart = jest.fn();
    const { getAllByRole } = render(
      <Resizable onResizeStart={handleResizeStart}>
        <p>Taylor Swift Subsection</p>
        <p>Ariana Grande Subsection</p>
        <p>Justin Bieber Subsection</p>
      </Resizable>,
    );

    const divider = getAllByRole('separator')[0];
    fireEvent.mouseDown(divider);

    expect(handleResizeStart).toHaveBeenCalled();
  });

  it('call onResizeEnd callback when divider has stopped beign dragged', () => {
    const handleResizeEnd = jest.fn();
    const { getAllByRole } = render(
      <Resizable onResizeEnd={handleResizeEnd}>
        <p>Taylor Swift Subsection</p>
        <p>Ariana Grande Subsection</p>
        <p>Justin Bieber Subsection</p>
      </Resizable>,
    );

    const divider = getAllByRole('separator')[0];
    fireEvent.mouseDown(divider);
    fireEvent.mouseUp(divider);

    expect(handleResizeEnd).toHaveBeenCalled();
  });
});
