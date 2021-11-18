import { useState } from 'react';

import { TextField } from '@datacamp/waffles/text-field';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { TextField } from '@datacamp/waffles/text-field';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

function Playground() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <TextField
      label="Text field label"
      description="Optional description"
      size="medium"
      value={value}
      onChange={handleChange}
    />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    TextField,
    Branch,
    ChevronRight,
  },
};

export default playgroundConfig;
