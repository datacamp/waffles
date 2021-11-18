import { useState } from 'react';
import { TextField } from '@datacamp/waffles/text-field';

function Example() {
  const [value, setValue] = useState('Rust, Not Java');

  return (
    <TextField
      label="What are your favorite programming languages?"
      description="Please separate them with comma."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="JavaScript, Python"
    />
  );
}

export default Example;
