import { useState, useRef } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Branch, ChevronRight, CrossCircle } from '@datacamp/waffles/icon';
import { Input } from '@datacamp/waffles/input';

function Example() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleClear() {
    setValue('');
    value && inputRef.current?.focus();
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <Input
        iconLeft={<Branch />}
        enhancerRight={<ChevronRight />}
        placeholder="Regular icon left and right"
      />
      <Input
        iconLeft={<Branch />}
        enhancerRight={
          <Input.Enhancer aria-label="Clear" onClick={handleClear}>
            <CrossCircle />
          </Input.Enhancer>
        }
        placeholder="Icon left and enhancer right"
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Example;
