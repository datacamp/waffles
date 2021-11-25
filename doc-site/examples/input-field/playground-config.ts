import { useState } from 'react';

import { InputField } from '@datacamp/waffles/input-field';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { InputField } from '@datacamp/waffles/input-field';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

function Playground() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <InputField
      label="Input field label"
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
    InputField,
    Branch,
    ChevronRight,
  },
};

export default playgroundConfig;
