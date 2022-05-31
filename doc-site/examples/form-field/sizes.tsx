import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Select } from '@datacamp/waffles/select';
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
        size="large"
        label="Large Size Select"
        description="Optional large size description."
        error="Please select an option"
        required
        requiredIndicator="showRequired"
      >
        <Select>
          <option value="option-1">First option - large</option>
          <option value="option-2">Second option - large</option>
        </Select>
      </FormField>
      <FormField
        size="medium"
        label="Medium Size Select"
        description="Optional medium size description."
        error="Please select an option"
        required
        requiredIndicator="showRequired"
      >
        <Select>
          <option value="option-1">First option - medium</option>
          <option value="option-2">Second option - medium</option>
        </Select>
      </FormField>

      <FormField
        size="small"
        label="Small Size Select"
        description="Optional small size description."
        error="Please select an option"
        required
        requiredIndicator="showRequired"
      >
        <Select>
          <option value="option-1">First option - small</option>
          <option value="option-2">Second option - small</option>
        </Select>
      </FormField>
    </form>
  );
}

export default Example;
