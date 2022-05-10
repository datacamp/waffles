import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';

const itemStyle = css`
  line-height: ${tokens.lineHeights.relaxed};
`;

const listStyle = css`
  list-style: disc;
  margin-top: ${tokens.spacing.small};
  margin-bottom: ${tokens.spacing.small};
  padding: 0;
  padding-inline-start: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

type ListProps = {
  children: React.ReactNode;
};

function ListItem({ children }: ListProps) {
  return (
    <Text as="li" css={itemStyle}>
      {children}
    </Text>
  );
}

function List({ children }: ListProps) {
  return <ul css={listStyle}>{children}</ul>;
}

List.Item = ListItem;

export default List;
