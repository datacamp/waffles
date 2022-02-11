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
  background-color: ${tokens.colors.navy};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <FormField
          inverted
          label="Inverted input with error"
          description="Description of inverted input with error."
          error="Provide correct value."
          required
          requiredIndicator="showRequired"
        >
          <Input />
        </FormField>
        <FormField
          inverted
          label="Inverted text area with error"
          description="Description of inverted text area with error."
          error="Provide correct value."
          required
          requiredIndicator="showRequired"
        >
          <TextArea />
        </FormField>
        <FormField
          inverted
          label="Inverted select with error"
          description="Description of inverted select with error."
          error="Select one of the options."
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
      <div css={wrapperStyle}>
        <FormField inverted label="Inverted disabled input">
          <Input disabled />
        </FormField>
        <FormField inverted label="Inverted disabled text area">
          <TextArea disabled />
        </FormField>
        <FormField inverted label="Inverted disabled select">
          <Select disabled value="python" onChange={() => {}}>
            <option value="python">Python</option>
            <option value="sql">SQL</option>
            <option value="r-lang">R</option>
          </Select>
        </FormField>
      </div>
    </>
  );
}

export default Story;
