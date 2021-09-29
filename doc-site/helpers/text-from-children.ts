import React, { Children } from 'react';

function textFromChildren(children: React.ReactNode) {
  let label = '';
  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });
  return label;
}

export default textFromChildren;
