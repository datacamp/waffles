/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Radio } from '../index';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        <Radio
          name="radioGroup"
          value="radio1"
          checked={true}
          onChange={() => {}}
        >
          Regular radio 1
        </Radio>
        <Radio
          disabled
          name="radioGroup"
          value="radio2"
          checked={false}
          onChange={() => {}}
        >
          Regular radio 2
        </Radio>
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Radio
          inverted
          name="radioGroup"
          value="radio1"
          checked={true}
          onChange={() => {}}
        >
          Regular radio 1
        </Radio>
        <Radio
          inverted
          disabled
          name="radioGroup"
          value="radio2"
          checked={false}
          onChange={() => {}}
        >
          Regular radio 2
        </Radio>
      </div>
    </>
  );
}

export default Story;
