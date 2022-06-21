import React from 'react';

import { listStyle } from './styles';

type ListProps = {
  /* The content of the list. Should be a list of `EmptyState.Item` components. */
  children: React.ReactNode;
};

function List({ children, ...restProps }: ListProps) {
  return (
    <ul css={listStyle} {...restProps}>
      {children}
    </ul>
  );
}

export default List;
