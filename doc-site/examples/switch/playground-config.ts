import { useState } from 'react';
import { css } from '@emotion/react';

import { Switch } from '@datacamp/waffles/switch';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';
import { css } from '@emotion/react';

import { Switch } from '@datacamp/waffles/switch';

function Playground() {
  const [checked, setChecked] = useState(false);

  function toggle(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
  }

  return (
    <form css={css\`width: 300px;\`}>
    <Switch
      checked={checked}
      onChange={toggle}
    >Switch label</Switch>
    </form>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    css,
    Switch,
  },
};

export default playgroundConfig;
