import { Children, isValidElement, cloneElement } from 'react';

import { useId } from '../hooks';
import { wrapperStyle } from './styles';
import Label from './label';
import Description from './description';
import Required from './required';
import Error from './error';

type FormControlProps = {
  label: string;
  description?: string;
  error?: string;
  inverted?: boolean;
  required?: boolean;
  children: JSX.Element;
};

function FormControl({
  label,
  description,
  error,
  inverted = false,
  required,
  children,
}: FormControlProps) {
  const formElement = Children.toArray(children)[0] as React.ReactElement;
  const fieldId = useId('form-control');
  const errorId = useId('form-control-error');

  if (isValidElement(formElement)) {
    const element = cloneElement(formElement as React.ReactElement, {
      id: fieldId,
      error: !!error,
      ...(error && {
        'aria-errormessage': errorId,
        'aria-describedby': errorId,
        'aria-invalid': true,
      }),
    });

    <div css={wrapperStyle()}>
      <Label htmlFor={fieldId} inverted={inverted}>
        {label}
        {required && <Required inverted={inverted} />}
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
    </div>;
  }

  return null;
}

export default FormControl;
