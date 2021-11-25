import { forwardRef } from 'react';

import InputFieldInternal from './input-field-internal';
import { Input } from '../input';

const InputField = forwardRef(InputFieldInternal);

const InputFieldNamespace = Object.assign(InputField, {
  Enhancer: Input.Enhancer,
});

export default InputFieldNamespace;
