import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import {
  Apply,
  Assess,
  BarChart,
  DataCampBrand,
  Document,
  Forbidden,
  Learn,
  Practice,
  PythonBrand,
  Random,
  Star,
} from '@datacamp/waffles/icon';
import { Heading } from '@datacamp/waffles/heading';
import { Avatar } from '@datacamp/waffles/avatar';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
  flex-wrap: wrap;
  margin-bottom: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <>
      <Heading size="medium">Text Content</Heading>
      <div css={wrapperStyle}>
        <Avatar variant="green" content="D" />
        <Avatar variant="navy" content="D" />
        <Avatar variant="white" content="D" />
        <Avatar variant="red" content="D" />
        <Avatar variant="orange" content="D" />
        <Avatar variant="yellow" content="D" />
        <Avatar variant="blue" content="D" />
        <Avatar variant="purple" content="D" />
        <Avatar variant="pink" content="D" />
        <Avatar variant="grey" content="D" />
        <Avatar variant="greySubtle" content="D" />
      </div>

      <Heading size="medium">Icon Content</Heading>
      <div
        css={css`
          ${wrapperStyle}
          margin-bottom: 0;
        `}
      >
        <Avatar variant="green" content={<Learn />} />
        <Avatar variant="navy" content={<PythonBrand />} />
        <Avatar variant="white" content={<DataCampBrand />} />
        <Avatar variant="red" content={<Forbidden />} />
        <Avatar variant="orange" content={<Practice />} />
        <Avatar variant="yellow" content={<Star />} />
        <Avatar variant="blue" content={<Assess />} />
        <Avatar variant="purple" content={<Document />} />
        <Avatar variant="pink" content={<Apply />} />
        <Avatar variant="grey" content={<Random />} />
        <Avatar variant="greySubtle" content={<BarChart />} />
      </div>
    </>
  );
}

export default Example;
