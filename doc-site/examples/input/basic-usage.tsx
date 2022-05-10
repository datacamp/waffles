import { useState } from 'react';
import { Input } from '@datacamp/waffles/input';

function Example() {
  const [value, setValue] = useState('Hello');

  return (
    <Input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Welcome"
    />
  );
}

export default Example;
