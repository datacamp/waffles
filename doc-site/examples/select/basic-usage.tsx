import { useState } from 'react';

import { Select } from '@datacamp/waffles/select';

function Example() {
  const [value, setValue] = useState('vscode');

  return (
    <Select
      aria-label="What's your favorite code editor?"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <option value="vscode">VSCode</option>
      <option value="vim">Vim</option>
      <option value="webstorm">WebStorm</option>
    </Select>
  );
}

export default Example;
