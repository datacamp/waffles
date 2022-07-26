import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

const wrapperStyle = css`
  width: 100%;
  height: 200px;
`;

const paragraphStyle = css`
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
  background-color: ${tokens.colors.beigeLight};
  height: 100%;
`;

function Example() {
  const [panelsProportions, setPanelsProportions] = useState<number[] | null>(
    null,
  );

  return (
    <>
      <div css={wrapperStyle}>
        <Resizable
          initialProportions={[2, 1]}
          onResizeEnd={(proportions) => {
            proportions && setPanelsProportions(proportions);
          }}
        >
          <Paragraph css={paragraphStyle}>First Panel</Paragraph>
          <Paragraph css={paragraphStyle}>Second Panel</Paragraph>
        </Resizable>
      </div>
      <Paragraph
        css={css`
          margin-top: ${tokens.spacing.medium};
        `}
      >
        Panels proportions:{' '}
        {panelsProportions ? (
          panelsProportions.map((proportion, index) => (
            <Code key={`proportion-${index}`}>{proportion}</Code>
          ))
        ) : (
          <Code>Initial</Code>
        )}
        .
      </Paragraph>
      <Paragraph>
        You can for example, persist panels proportions by using{' '}
        <Code>onResizeEnd</Code> and <Code>localStorage</Code>.
      </Paragraph>
    </>
  );
}

export default Example;
