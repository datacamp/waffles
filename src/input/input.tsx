import { forwardRef } from 'react';

import InputInternal from './input-internal';
import Enhancer from './enhancer';

const Input = forwardRef(InputInternal);

const InputNamespace = Object.assign(Input, {
  Enhancer,
});

export default InputNamespace;
