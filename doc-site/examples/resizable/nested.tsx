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
        minSubsectionSize="80px"
        orientation="vertical"
        showSeparators
      >
        <Paragraph css={paragraphStyle}>First Resizable Subsection</Paragraph>
        <Paragraph css={paragraphStyle}>First Resizable Subsection</Paragraph>
        <Resizable orientation="horizontal" showSeparators>
          <Paragraph css={paragraphStyle}>First Nested Subsection</Paragraph>
          <Paragraph css={paragraphStyle}>Second Nested Subsection</Paragraph>
        </Resizable>
      </Resizable>
    </div>
  );
}

export default Example;
