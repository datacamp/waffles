import React from 'react';

import TextArea from './text-area';
import { growWrapperStyle, fauxGrowElementStyle } from './styles';

type AutoGrowProps = {
  value: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  size: NonNullable<React.ComponentProps<typeof TextArea>['size']>;
  autoGrow: boolean;
  children: JSX.Element;
};

// Add space at the end of faux element content to prevent jumping
function AutoGrow({ value, size, autoGrow, children }: AutoGrowProps) {
  return autoGrow ? (
    <div css={growWrapperStyle()}>
      {children}
      <div
        aria-hidden="true"
        css={fauxGrowElementStyle({ size })}
      >{`${value} `}</div>
    </div>
  ) : (
    children
  );
}

export default AutoGrow;
