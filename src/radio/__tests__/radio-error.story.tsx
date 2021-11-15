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
          error
          name="radioGroup"
          value="radio1"
          checked={false}
          onChange={() => {}}
        >
          Regular radio 1 with error
        </Radio>
        <Radio
          name="radioGroup"
          value="radio2"
          checked={true}
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
          error
          inverted
          name="radioGroup"
          value="radio1"
          checked={false}
          onChange={() => {}}
        >
          Inverted radio 1 with error
        </Radio>
        <Radio
          inverted
          name="radioGroup"
          value="radio2"
          checked={true}
          onChange={() => {}}
        >
          Inverted radio 2
        </Radio>
      </div>
    </>
  );
}

export default Story;
