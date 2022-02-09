import React, { Children, cloneElement, isValidElement } from 'react';

import { useId } from '../hooks';
import Label from './label';
import Description from './description';
import RequiredIndicator from './required-indicator';
import Error from './error';
import { wrapperStyle } from './styles';

type FormFieldProps = {
  /* The label displayed above the input. */
  label: string;
  /* Input component to be enhanced. In general pass Waffles `Input`, `TextArea` or `Select`. */
  children: JSX.Element;
  id?: string;
  /* Optional description shown above the input. */
  description?: React.ReactNode;
  /* Shows required indicator above the input. */
  required?: boolean;
  /* Type of required indicator to display. Depending on selected option show either *Optional* when input is not required, or *Required* when input is marked as required.  */
  requiredIndicator?: 'showOptional' | 'showRequired';
  /* Sets the style of the input field suitable for dark backgrounds. */
  inverted?: boolean;
  /* Error message displayed below the input. Also sets appropriate error styling of the input itself, and `aria-invalid` attribute.*/
  error?: string;
};

function FormField({
  label,
  id,
  description,
  required = false,
  requiredIndicator = 'showOptional',
  inverted = false,
  error,
  children,
}: FormFieldProps) {
  const generatedId = useId('form-field');
  const fieldId = id || generatedId;
  const errorId = useId('form-field-error');
  const formElement = Children.toArray(children)[0] as React.ReactElement; // It's safe because only 1 child is allowed

  if (isValidElement(formElement)) {
    const element = cloneElement(formElement as React.ReactElement, {
      id: fieldId,
      ...(required && { required }),
      ...(inverted && { inverted }),
      ...(error && {
        error: true,
        'aria-errormessage': errorId,
        'aria-describedby': errorId,
        'aria-invalid': true,
      }),
    });

    return (
      <div css={wrapperStyle()}>
        <Label htmlFor={fieldId} inverted={inverted}>
          {label}
          <RequiredIndicator
            isRequired={required}
            indicator={requiredIndicator}
            inverted={inverted}
          />
        </Label>
        {description && (
          <Description inverted={inverted}>{description}</Description>
        )}
        {element}
        {error && (
          <Error id={errorId} inverted={inverted}>
            {error}
          </Error>
        )}
      </div>
    );
  }

  return children;
}

export default FormField;
