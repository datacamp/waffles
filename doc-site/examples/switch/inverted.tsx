import { useState } from 'react';
import { css } from '@emotion/react';

import { Switch } from '@datacamp/waffles/switch';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <form
      css={css`
        width: 300px;
      `}
    >
      <Switch inverted checked={checked} onChange={() => setChecked(!checked)}>
        Inverted switch
      </Switch>
    </form>
  );
}

export default Example;
