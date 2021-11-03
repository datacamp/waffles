import React from 'react';

import { useId } from '../hooks';
import { wrapperStyle } from './styles';
import Label from './label';
import Description from './description';
import Required from './required';
import Error from './error';

type FormControlPropsRenderProps = {
  id: string;
  error?: boolean;
  'aria-errormessage'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
};

type FormControlProps = {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  inverted?: boolean;
  children: (props: FormControlPropsRenderProps) => React.ReactNode;
};

function FormControl({
  label,
  description,
  error,
  required = false,
  inverted = false,
  children,
}: FormControlProps) {
  const fieldId = useId('form-control');
  const errorId = useId('form-control-error');

  const elementProps = {
    id: fieldId,
    error: !!error,
    ...(error && {
      'aria-errormessage': errorId,
      'aria-describedby': errorId,
      'aria-invalid': true,
    }),
  };

  return (
    <div css={wrapperStyle()}>
      <Label htmlFor={fieldId} inverted={inverted}>
        {label}
        {required && <Required inverted={inverted} />}
      </Label>
      {description && (
        <Description inverted={inverted}>{description}</Description>
      )}
      {children({ ...elementProps })}
      {error && (
        <Error id={errorId} inverted={inverted}>
          {error}
        </Error>
      )}
    </div>
  );
}

export default FormControl;
