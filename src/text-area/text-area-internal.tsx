import React, { useState } from 'react';

import { textAreaWrapper, textAreaStyle } from './styles';
import AutoGrow from './auto-grow';

type TextAreaProps = {
  /* Sets appropriate error style. */
  error?: boolean;
  /* Sets the style of the text area suitable for dark backgrounds. */
  inverted?: boolean;
  /* Allows height to expand as much as it needs to in order to contain the current value. */
  autoGrow?: boolean;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;

function TextAreaInternal(
  {
    error,
    value,
    inverted = false,
    autoGrow = false,
    onFocus,
    onBlur,
    ...restProps
  }: TextAreaProps,
  ref?: React.Ref<HTMLTextAreaElement>,
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setIsFocused(false);
  }

  return (
    <AutoGrow {...{ value, autoGrow }}>
      <div css={textAreaWrapper({ isFocused, autoGrow })}>
        <textarea
          {...restProps}
          ref={ref}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          css={textAreaStyle({ hasError: !!error, inverted })}
        />
      </div>
    </AutoGrow>
  );
}

export default TextAreaInternal;
