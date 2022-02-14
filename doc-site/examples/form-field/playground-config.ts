import { useState } from 'react';

import { FormField } from '@datacamp/waffles/form-field';
import { Input } from '@datacamp/waffles/input';
import { TextArea } from '@datacamp/waffles/text-area';
import { Select } from '@datacamp/waffles/select';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { FormField } from '@datacamp/waffles/form-field';
import { Input } from '@datacamp/waffles/input';

function Playground() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <FormField
      label="Input label"
      description="Optional description"
    >
      <Input
        size="medium"
        value={value}
        onChange={handleChange}
      />
    </FormField>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    FormField,
    Input,
    TextArea,
    Select,
  },
};

export default playgroundConfig;
