import { useState } from 'react';

import { Select } from '@datacamp/waffles/select';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { Select } from '@datacamp/waffles/select';

function Playground() {
  const [value, setValue] = useState('option2');

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return (
    <Select
      aria-label="Simple select input"
      value={value}
      onChange={handleChange}
    >
      <option value="option1">First option</option>
      <option value="option2">Second option</option>
    </Select>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Select,
  },
};

export default playgroundConfig;
