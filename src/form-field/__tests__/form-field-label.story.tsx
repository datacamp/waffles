/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { FormField } from '../index';
import { tokens } from '../../tokens';
import { TextArea } from '../../text-area';
import { Select } from '../../select';
import { Input } from '../../input';

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
        label="Regular input"
        description="Description of regular input"
      >
        <Input />
      </FormField>
      <FormField
        label="Regular text area"
        description="Description of regular text area"
      >
        <TextArea />
      </FormField>
      <FormField
        label="Regular select"
        description="Description of regular select"
      >
        <Select value="python" onChange={() => {}}>
          <option value="python">Python</option>
          <option value="sql">SQL</option>
          <option value="r-lang">R</option>
        </Select>
      </FormField>
    </div>
  );
}

export default Story;
