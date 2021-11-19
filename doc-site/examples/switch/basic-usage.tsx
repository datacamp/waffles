import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Switch } from '@datacamp/waffles/switch';

function Example() {
  const [autosave, setAutosave] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
        width: 300px;
      `}
    >
      <Switch checked={autosave} onChange={() => setAutosave(!autosave)}>
        Autosave
      </Switch>
      <Switch
        checked={notifications}
        onChange={() => setNotifications(!notifications)}
      >
        Notifications
      </Switch>
    </form>
  );
}

export default Example;
