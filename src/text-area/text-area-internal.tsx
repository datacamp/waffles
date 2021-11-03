import React, { useState } from 'react';

import { FormControl } from '../form-control';
import { textAreaWrapperStyle, textAreaStyle } from './styles';

type TextAreaProps = {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  inverted?: boolean;
  autoGrow?: boolean;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;

function TextAreaInternal(
  {
    label,
    description,
    error,
    required = false,
    inverted = false,
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
    <FormControl {...{ label, description, error, required, inverted }}>
      {(formControlProps) => {
        return (
          <div css={textAreaWrapperStyle({ isFocused })}>
            <textarea
              {...formControlProps}
              {...restProps}
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              css={textAreaStyle({ hasError: !!error, inverted })}
            />
          </div>
        );
      }}
    </FormControl>
  );
}

export default TextAreaInternal;
