import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';

const wrapperStyle = css`
  width: 100%;
  height: 400px;
  background-color: ${tokens.colors.navy};
  border-radius: ${tokens.borderRadius.medium};
`;

const paragraphStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <div css={wrapperStyle}>
      <Resizable inverted layout="column" showDividers>
        <Paragraph inverted css={paragraphStyle}>
          First Panel
        </Paragraph>
        <Paragraph inverted css={paragraphStyle}>
          Second Panel
        </Paragraph>
        <Paragraph inverted css={paragraphStyle}>
          Third Panel
        </Paragraph>
      </Resizable>
    </div>
  );
}

export default Example;
