import { useState } from 'react';
import { Input } from '@datacamp/waffles/input';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { Input } from '@datacamp/waffles/input';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

function Playground() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Input
      size="medium"
      placeholder="Controlled Input"
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
    Input,
    Branch,
    ChevronRight,
  },
};

export default playgroundConfig;
