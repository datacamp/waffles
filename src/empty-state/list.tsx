import React from 'react';

import { listStyle } from './styles';

type ListBaseProps = {
  /* The content of the list. Should be a list of `EmptyState.Item` components. */
  children: React.ReactNode;
};

function List({ children, ...restProps }: ListBaseProps) {
  return (
    <ul css={listStyle} {...restProps}>
      {children}
    </ul>
  );
}

export default List;
