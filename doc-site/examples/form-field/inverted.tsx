import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { TextArea } from '@datacamp/waffles/text-area';
import { Select } from '@datacamp/waffles/select';
import { Input } from '@datacamp/waffles/input';
import { FormField } from '@datacamp/waffles/form-field';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
`;

function Example() {
  return (
    <form css={formStyle}>
      <FormField
        inverted
        label="Inverted input"
        description="Optional description of inverted input"
      >
        <Input placeholder="Input placeholder" />
      </FormField>
      <FormField
        inverted
        label="Inverted text area"
        description="Optional description of inverted text area"
      >
        <TextArea placeholder="Text area placeholder" />
      </FormField>
      <FormField
        inverted
        label="Inverted select"
        description="Optional description of inverted select"
      >
        <Select>
          <option value="" disabled hidden>
            Select placeholder
          </option>
          <option value="option-1">First option</option>
          <option value="option-2">Second option</option>
        </Select>
      </FormField>
    </form>
  );
}

export default Example;
