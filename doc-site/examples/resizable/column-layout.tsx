import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';

const wrapperStyle = css`
  width: 100%;
  height: 200px;
  background-color: ${tokens.colors.beigeLight};
  border-radius: ${tokens.borderRadius.medium};
`;

const paragraphStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <div css={wrapperStyle}>
      <Resizable initialProportions={[2, 1, 1]} layout="column" showDividers>
        <Paragraph css={paragraphStyle}>First Panel</Paragraph>
        <Paragraph css={paragraphStyle}>Second Panel</Paragraph>
        <Paragraph css={paragraphStyle}>Third Panel</Paragraph>
      </Resizable>
    </div>
  );
}

export default Example;
