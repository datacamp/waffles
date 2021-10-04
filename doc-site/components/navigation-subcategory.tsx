import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';

const wrapperStyle = css`
  display: flex;
  align-items: center;
  padding-left: ${tokens.spacing.medium};
  height: ${tokens.sizing.medium};
  color: ${tokens.colors.navySubtleTextOnDark};
  user-select: none;
`;

const labelStyle = css`
  color: ${tokens.colors.navySubtleTextOnDark};
`;

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

type NavigationCategoryProps = {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

function NavigationCategory({
  label,
  icon,
  children,
}: NavigationCategoryProps) {
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
      <span css={wrapperStyle}>
        {icon}
        <Text
          css={css`
            ${labelStyle}
            ${icon &&
            css`
              padding-left: ${tokens.spacing.small};
            `}
          `}
        >
          {label}
        </Text>
      </span>
      <ul css={listStyle}>{renderChildren()}</ul>
    </li>
  );
}

export default NavigationCategory;
