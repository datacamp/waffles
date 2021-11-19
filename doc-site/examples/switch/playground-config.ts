import { useState } from 'react';

import { Switch } from '@datacamp/waffles/switch';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { Switch } from '@datacamp/waffles/switch';

function Playground() {
  const [checked, setChecked] = useState(false);

  function toggle(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
  }

  return (
    <Switch
      checked={checked}
      onChange={toggle}
    >Switch label</Switch>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Switch,
  },
};

export default playgroundConfig;
