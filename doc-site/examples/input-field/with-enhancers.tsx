import { useState, useRef } from 'react';

import { Branch, CrossCircle } from '@datacamp/waffles/icon';
import { InputField } from '@datacamp/waffles/input-field';

function Example() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleClear() {
    setValue('');
    value && inputRef.current?.focus();
  }

  return (
    <InputField
      label="Input field with left icon and right enhancer"
      description="It's possible to take full control of
        what right enhancer does. In this case it's clearing
        the input field. For decorative purposes it's also
        perfectly fine to provide regular icon as right enhancer."
      iconLeft={<Branch />}
      enhancerRight={
        <InputField.Enhancer aria-label="Clear" onClick={handleClear}>
          <CrossCircle />
        </InputField.Enhancer>
      }
      ref={inputRef}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Example;
