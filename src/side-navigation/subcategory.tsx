import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { Text } from '../text';

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

type SubcategoryProps = {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

function Subcategory({ label, icon, children }: SubcategoryProps) {
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

export default Subcategory;
