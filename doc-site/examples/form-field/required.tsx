import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { FormField } from '@datacamp/waffles/form-field';
import { Input } from '@datacamp/waffles/input';
import { TextArea } from '@datacamp/waffles/text-area';
import { Select } from '@datacamp/waffles/select';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
`;

function Example() {
  return (
    <form css={formStyle}>
      <FormField
        label="Input with required indicator"
        required
        requiredIndicator="showRequired"
      >
        <Input />
      </FormField>
      <FormField
        label="Text area with required indicator"
        required
        requiredIndicator="showRequired"
      >
        <TextArea />
      </FormField>
      <FormField
        label="Select with required indicator"
        required
        requiredIndicator="showRequired"
      >
        <Select>
          <option value="option-1">First option</option>
          <option value="option-2">Second option</option>
        </Select>
      </FormField>
    </form>
  );
}

export default Example;
