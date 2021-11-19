import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Radio } from '@datacamp/waffles/radio';

function Example() {
  const [value, setValue] = useState('radio1');

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
      `}
    >
      <Radio
        inverted
        name="inverted-radio"
        value="radio1"
        checked={value === 'radio1'}
        onChange={(event) => setValue(event.target.value)}
      >
        First inverted radio
      </Radio>
      <Radio
        inverted
        name="inverted-radio"
        value="radio2"
        checked={value === 'radio2'}
        onChange={(event) => setValue(event.target.value)}
      >
        Second inverted radio
      </Radio>
    </form>
  );
}

export default Example;
