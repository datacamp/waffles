import React, { useState } from 'react';

import { FormControl } from '../form-control';
import { textAreaWrapper, textAreaStyle } from './styles';
import AutoGrow from './auto-grow';

type TextAreaProps = {
  /* The label displayed above the text area. */
  label: string;
  /* Optional description shown above the text area. */
  description?: React.ReactNode;
  /* Error message displayed below the text area. Also sets appropriate error styling of the text area itself, and `aria-invalid` attribute. */
  error?: string;
  /* Shows required indicator above the text area. */
  required?: boolean;
  /* Sets the style of the text area suitable for dark backgrounds. */
  inverted?: boolean;
  /* Allows height to expand as much as it needs to in order to contain the current value. */
  autoGrow?: boolean;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;

function TextAreaInternal(
  {
    id,
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
    <FormControl {...{ id, label, description, error, required, inverted }}>
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
