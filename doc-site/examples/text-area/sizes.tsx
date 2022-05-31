import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { TextArea } from '@datacamp/waffles/text-area';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <TextArea
        size={'large'}
        aria-label="Large text area"
        placeholder="Large Text Area"
        rows={3}
      />
      <TextArea
        size={'medium'}
        aria-label="Medium text area"
        placeholder="Medium Text Area"
        rows={2}
      />{' '}
      <TextArea
        size={'small'}
        aria-label="Small text area"
        placeholder="Small Text Area"
        rows={1}
      />
    </div>
  );
}

export default Example;
