import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
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
        size={'small'}
        label="Form Field Label Small"
        description="Form Field Description Small"
      >
        <Input placeholder="JavaScript, Python" />
      </FormField>
      <FormField
        size={'small'}
        label="Required Option Select"
        error="Please select an option"
        required
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
