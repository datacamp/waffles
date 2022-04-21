import React, { isValidElement, cloneElement } from 'react';
import { render } from '@testing-library/react';

import { deepChildrenMap } from '../index';

type DeepCloneProps = {
  children: React.ReactNode;
};

function DeepClone({ children }: DeepCloneProps) {
  return (
    <div>
      {deepChildrenMap(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            'data-testid': 'taylor-swift-clone',
          });
        }

        return null;
      })}
    </div>
  );
}

describe('deepChildrenMap', () => {
  it('modifies each nested element', () => {
    const { getAllByTestId } = render(
      <DeepClone>
        <div>
          <h1>Little Test</h1>
          <div>
            <span>Test</span>
          </div>
          <div>
            <span>Test2</span>
          </div>
          <p>Test 3</p>
        </div>
      </DeepClone>,
    );

    const clonedElements = getAllByTestId('taylor-swift-clone');

    expect(clonedElements).toHaveLength(7);
  });

  it('renders snapshot', () => {
    const { container } = render(
      <DeepClone>
        <div>
          <h1>Little Test</h1>
          <div>
            <span>Test</span>
          </div>
          <p>Test 3</p>
        </div>
      </DeepClone>,
    );

    const elements = container.firstChild;

    expect(elements).toMatchSnapshot();
  });
});
