import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { FormField } from '@datacamp/waffles/form-field';
import { Input } from '@datacamp/waffles/input';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
`;

function Example() {
  return (
    <form css={formStyle}>
      <FormField
        label="Required indicator"
        required
        requiredIndicator="showRequired"
      >
        <Input />
      </FormField>
      <FormField label="Optional indicator" requiredIndicator="showOptional">
        <Input />
      </FormField>
      <FormField label="No indicator" requiredIndicator="none">
        <Input />
      </FormField>
    </form>
  );
}

export default Example;
