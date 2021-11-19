import { useState } from 'react';

import { Checkbox } from '@datacamp/waffles/checkbox';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { Checkbox } from '@datacamp/waffles/checkbox';

function Playground() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked);
  }

  return (
    <Checkbox
      checked={checked}
      onChange={toggle}
    >Checkbox label</Checkbox>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Checkbox,
  },
};

export default playgroundConfig;
