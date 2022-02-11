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
  gap: ${tokens.spacing.large};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <FormField
          label="Regular input"
          description="Description of regular input"
          requiredIndicator="showRequired"
          required
        >
          <Input />
        </FormField>
        <FormField
          label="Regular text area"
          description="Description of regular text area"
          requiredIndicator="showRequired"
          required
        >
          <TextArea />
        </FormField>
        <FormField
          label="Regular select"
          description="Description of regular select"
          requiredIndicator="showRequired"
          required
        >
          <Select value="python" onChange={() => {}}>
            <option value="python">Python</option>
            <option value="sql">SQL</option>
            <option value="r-lang">R</option>
          </Select>
        </FormField>
      </div>
      <div css={wrapperStyle}>
        <FormField
          label="Regular input"
          description="Description of regular input"
          requiredIndicator="showOptional"
        >
          <Input />
        </FormField>
        <FormField
          label="Regular text area"
          description="Description of regular text area"
          requiredIndicator="showOptional"
        >
          <TextArea />
        </FormField>
        <FormField
          label="Regular select"
          description="Description of regular select"
          requiredIndicator="showOptional"
        >
          <Select value="python" onChange={() => {}}>
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
