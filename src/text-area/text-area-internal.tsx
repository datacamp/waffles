import React, { useState } from 'react';

import { FormControl } from '../form-control';
import { textAreaWrapper, textAreaStyle } from './styles';
import AutoGrow from './auto-grow';

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
    value,
    required = false,
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
    <FormControl {...{ label, description, error, required, inverted }}>
      {(formControlProps) => {
        return (
          <AutoGrow {...{ value, autoGrow }}>
            <div css={textAreaWrapper({ isFocused, autoGrow })}>
              <textarea
                {...formControlProps}
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
      }}
    </FormControl>
  );
}

export default TextAreaInternal;
