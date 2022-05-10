import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Radio } from '@datacamp/waffles/radio';

function Example() {
  const [value, setValue] = useState('');

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
      `}
    >
      <Text
        as="p"
        css={css`
          font-weight: ${tokens.fontWeights.bold};
        `}
      >
        What&apos;s your favorite programming language?
      </Text>
      <Radio
        name="language"
        value="js"
        checked={value === 'js'}
        onChange={(event) => setValue(event.target.value)}
      >
        JavaScript
      </Radio>
      <Radio
        name="language"
        value="rust"
        checked={value === 'rust'}
        onChange={(event) => setValue(event.target.value)}
      >
        Rust
      </Radio>
      <Radio
        name="language"
        value="python"
        checked={value === 'python'}
        onChange={(event) => setValue(event.target.value)}
      >
        Python
      </Radio>
    </form>
  );
}

export default Example;
