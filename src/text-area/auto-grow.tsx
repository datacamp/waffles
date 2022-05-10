import React from 'react';

import { growWrapperStyle, fauxGrowElementStyle } from './styles';

type AutoGrowProps = {
  value: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  autoGrow: boolean;
  children: JSX.Element;
};

// Add space at the end of faux element content to prevent jumping
function AutoGrow({ value, autoGrow, children }: AutoGrowProps) {
  return autoGrow ? (
    <div css={growWrapperStyle()}>
      {children}
      <div aria-hidden="true" css={fauxGrowElementStyle()}>{`${value} `}</div>
    </div>
  ) : (
    children
  );
}

export default AutoGrow;
