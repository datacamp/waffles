import React, { Children, cloneElement, isValidElement } from 'react';

import { Text } from '../text';
import { subCategoryStyle, subCategoryLabelStyle, listStyle } from './styles';

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
      <span css={subCategoryStyle()}>
        {icon}
        <Text css={subCategoryLabelStyle({ hasIcon: !!icon })}>{label}</Text>
      </span>
      <ul css={listStyle()}>{renderChildren()}</ul>
    </li>
  );
}

export default Subcategory;
