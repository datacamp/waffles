/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Input } from '../../input';
import { TextArea } from '../../text-area';
import { Select } from '../../select';
import { FormField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <FormField
        label="Regular input with error"
        error="Provide correct value."
        required
        requiredIndicator="showRequired"
      >
        <Input />
      </FormField>
      <FormField
        label="Regular text area with error"
        error="Provide correct value."
        required
        requiredIndicator="showRequired"
      >
        <TextArea />
      </FormField>
      <FormField
        label="Regular select with error"
        error="Provide one of the options."
        required
        requiredIndicator="showRequired"
      >
        <Select value="" onChange={() => {}}>
          <option value="" disabled hidden>
            Select language
          </option>
          <option value="python">Python</option>
          <option value="sql">SQL</option>
          <option value="r-lang">R</option>
        </Select>
      </FormField>
    </div>
  );
}

export default Story;
