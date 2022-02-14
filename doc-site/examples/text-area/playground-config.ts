import { useState } from 'react';

import { TextArea } from '@datacamp/waffles/text-area';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { TextArea } from '@datacamp/waffles/text-area';

function Playground() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return (
    <TextArea
      aria-label="Simple text area"
      placeholder="Controlled TextArea"
      size="medium"
      rows={3}
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
    TextArea,
  },
};

export default playgroundConfig;
