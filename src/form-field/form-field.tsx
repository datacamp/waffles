import React, { cloneElement } from 'react';

import { useId } from '../hooks';

import { wrapperStyle } from './styles';
import RequiredIndicator from './required-indicator';
import Label from './label';
import Error from './error';
import Description from './description';

type FormFieldProps = {
  /* The label displayed above the input. */
  label: string;
  /* Input component to be enhanced. In general pass Waffles [Input](/components/input), [TextArea](/components/text-area) or [Select](/components/select). Must be single element. */
  children: JSX.Element;
  /* Optional input identifier. Pass it when component is rendered on the server to avoid client-server attribute mismatch. */
  id?: string;
  /* Optional description shown above the input. */
  description?: React.ReactNode;
  /* Sets `required` attribute on the enhanced input. Depending on the selected `requiredIndicator` option, shows or hides appropriate indicator next to the label. */
  required?: boolean;
  /* Type of required indicator to display. Depending on selected option show either *Optional* when input is not required, *Required* when input is marked as required or disable it completely.  */
  requiredIndicator?: 'showOptional' | 'showRequired' | 'none';
  /* Sets the style of the input field suitable for dark backgrounds. */
  inverted?: boolean;
  /* Error message displayed below the input. */
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

  const element = cloneElement(children, {
    id: fieldId,
    ...(required && { required }),
    ...(inverted && { inverted }),
    ...(error && {
      error: true,
      'aria-errormessage': errorId,
      'aria-describedby': errorId,
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

export default FormField;
