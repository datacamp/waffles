import { forwardRef } from 'react';

import TextFieldInternal from './text-field-internal';
import { Input } from '../input';

const TextField = forwardRef(TextFieldInternal);

const TextFieldNamespace = Object.assign(TextField, {
  Enhancer: Input.Enhancer,
});

export default TextFieldNamespace;
