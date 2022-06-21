import React from 'react';

import { listItemStyle } from './styles';

type ListItemProps = {
  /* An icon displayed to the left of the list item. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  icon?: JSX.Element;
  /* The content of the list item. Most of the time should be plain text. */
  children: React.ReactNode;
};

function ListItem({ icon, children, ...restProps }: ListItemProps) {
  return (
    <li css={listItemStyle} {...restProps}>
      {icon}
      {children}
    </li>
  );
}

export default ListItem;
