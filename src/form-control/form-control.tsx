import React from 'react';

import { useId } from '../hooks';
import { wrapperStyle } from './styles';
import Label from './label';
import Description from './description';
import Required from './required';
import Error from './error';

type FormControlPropsRenderProps = {
  id: string;
  'aria-errormessage'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
};

type FormControlProps = {
  label: string;
  id?: string;
  description?: string;
  error?: string;
  required?: boolean;
  inverted?: boolean;
  children: (props: FormControlPropsRenderProps) => React.ReactNode;
};

function FormControl({
  label,
  id,
  description,
  error,
  required = false,
  inverted = false,
  children,
}: FormControlProps) {
  const generatedId = useId('form-control');
  const fieldId = id || generatedId;
  const errorId = useId('form-control-error');

  const elementProps = {
    id: fieldId,
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
