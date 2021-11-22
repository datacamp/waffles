import { useState } from 'react';

import { Select } from '@datacamp/waffles/select';

function Example() {
  const [value, setValue] = useState('');

  return (
    <Select
      label="Select with placeholder"
      description="Provide an option with empty value which is
        at the same time disabled and hidden."
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <option value="" disabled hidden>
        Placeholder
      </option>
      <option value="option1">First option</option>
      <option value="option2">Second option</option>
    </Select>
  );
}

export default Example;
