import React, { Children, cloneElement, isValidElement } from 'react';

function deepChildrenMap(
  children: React.ReactNode | React.ReactNode[],
  mapFn: (child: React.ReactNode) => React.ReactNode,
): React.ReactNode[] {
  return Children.toArray(children).map((child) => {
    if (!isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = cloneElement(child, {
        ...child.props,
        children: deepChildrenMap(child.props.children, mapFn),
      });
    }

    return mapFn(child);
  });
}

export default deepChildrenMap;
