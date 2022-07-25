import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';

const wrapperStyle = css`
  width: 100%;
  height: 400px;
  background-color: ${tokens.colors.beigeLight};
  border-radius: ${tokens.borderRadius.medium};
`;

const paragraphStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <div css={wrapperStyle}>
      <Resizable
        initialProportions={[1, 1, 2]}
        minSize="80px"
        layout="column"
        showDividers
      >
        <Paragraph css={paragraphStyle}>First Panel</Paragraph>
        <Paragraph css={paragraphStyle}>Second Panel</Paragraph>
        <Resizable layout="row" showDividers>
          <Paragraph css={paragraphStyle}>First Nested Panel</Paragraph>
          <Paragraph css={paragraphStyle}>Second Nested Panel</Paragraph>
        </Resizable>
      </Resizable>
    </div>
  );
}

export default Example;
