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
      <Resizable
        initialProportions={[2, 1, 1]}
        orientation="vertical"
        showSeparators
      >
        <Paragraph css={paragraphStyle}>First Resizable Subsection</Paragraph>
        <Paragraph css={paragraphStyle}>First Second Subsection</Paragraph>
        <Paragraph css={paragraphStyle}>First Third Subsection</Paragraph>
      </Resizable>
    </div>
  );
}

export default Example;
