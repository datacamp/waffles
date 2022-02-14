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
      <FormField label="Disabled input">
        <Input disabled placeholder="Disabled" />
      </FormField>
      <FormField
        label="Input with an error message"
        error="Error message"
        required
      >
        <Input placeholder="Error" />
      </FormField>
      <FormField label="Disabled text area">
        <TextArea disabled placeholder="Disabled" />
      </FormField>
      <FormField
        label="Text area with an error message"
        error="Error message"
        required
      >
        <TextArea placeholder="Error" />
      </FormField>
      <FormField label="Disabled select">
        <Select disabled>
          <option value="">Disabled</option>
          <option value="option-1">First option</option>
          <option value="option-2">Second option</option>
        </Select>
      </FormField>
      <FormField
        label="Select with an error message"
        error="Error message"
        required
      >
        <Select>
          <option value="" disabled hidden>
            Error
          </option>
          <option value="option-1">First option</option>
          <option value="option-2">Second option</option>
        </Select>
      </FormField>
    </form>
  );
}

export default Example;
