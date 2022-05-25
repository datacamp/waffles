import React, { Children, cloneElement, isValidElement } from 'react';

/**
 * In a similar way to React.Children.map, creates a new children array, but calls a provided function recursively on every child (and its children).
 *
 * @param children React children
 * @param mapFn Function called recursively on every child
 * @returns Array of transformed React children
 */
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
