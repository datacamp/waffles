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
          label="Input with Required label"
          requiredIndicator="showRequired"
          required
        >
          <Input />
        </FormField>
        <FormField
          label="Text area with Required label"
          requiredIndicator="showRequired"
          required
        >
          <TextArea />
        </FormField>
        <FormField
          label="Select with Required label"
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
          label="Input with Optional label"
          requiredIndicator="showOptional"
        >
          <Input />
        </FormField>
        <FormField
          label="Text area with Optional label"
          requiredIndicator="showOptional"
        >
          <TextArea />
        </FormField>
        <FormField
          label="Select with Optional label"
          requiredIndicator="showOptional"
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
          label="Input with required indicator disabled"
          requiredIndicator="none"
          required
        >
          <Input />
        </FormField>
        <FormField
          label="Text area with required indicator disabled"
          requiredIndicator="none"
          required
        >
          <TextArea />
        </FormField>
        <FormField
          label="Select with required indicator disabled"
          requiredIndicator="none"
          required
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
