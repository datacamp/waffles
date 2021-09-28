import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';

const labelStyle = css`
  display: flex;
  align-items: center;
  padding-left: ${tokens.spacing.medium};
  color: ${tokens.colors.navySubtleTextOnDark};
  height: ${tokens.sizing.medium};
  user-select: none;
`;

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

type NavigationCategoryProps = {
  label: string;
  children: React.ReactNode;
};

function NavigationCategory({ label, children }: NavigationCategoryProps) {
  // Inject isSubLink prop to every child
  function renderChildren() {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          isSubLink: true,
        });
      }

      return null;
    });
  }

  return (
    <li>
      <Text css={labelStyle}>{label}</Text>
      <ul css={listStyle}>{renderChildren()}</ul>
    </li>
  );
}

export default NavigationCategory;
