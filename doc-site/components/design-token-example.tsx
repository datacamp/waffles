import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';

import Table from './table';

const exampleCellStyle = css`
  height: 38px;
  padding: 0;
`;

const exampleWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-right: 12px;
  margin-left: 12px;
  overflow: hidden;
  position: relative;
`;

const sizeBarStyle = css`
  height: 100%;
  background-color: ${tokens.colors.navy};
`;

const surfaceStyle = css`
  width: 100px;
  height: 100px;
  background-color: ${tokens.colors.beige};
  transform: translateX(-30px) rotate(-45deg);
  position: absolute;
`;

const textStyle = css`
  margin-bottom: 0;
`;

type ExampleProps = {
  value: string;
};

function ColorExample({ value }: ExampleProps) {
  return (
    <Table.Cell css={exampleCellStyle}>
      <div
        css={css`
          ${exampleWrapperStyle}
          background-color: ${value};
        `}
      />
    </Table.Cell>
  );
}

function SizeExample({ value }: ExampleProps) {
  return (
    <Table.Cell css={exampleCellStyle}>
      <div css={exampleWrapperStyle}>
        <span
          css={css`
            ${sizeBarStyle};
            width: ${value};
          `}
        />
      </div>
    </Table.Cell>
  );
}

function SurfaceExample(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Table.Cell css={exampleCellStyle}>
      <div css={exampleWrapperStyle}>
        <span
          css={css`
            ${sizeBarStyle};
          `}
        />
        <div css={surfaceStyle} {...props} />
      </div>
    </Table.Cell>
  );
}

type TypographyExampleProps = {
  lineBreak?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

function TypographyExample({
  lineBreak = false,
  ...restProps
}: TypographyExampleProps) {
  return (
    <Table.Cell>
      <Paragraph css={textStyle} {...restProps}>
        The quick brown fox jumps {lineBreak && <br />}over the lazy dog.
      </Paragraph>
    </Table.Cell>
  );
}

function PlainExample() {
  return <Table.Cell>—</Table.Cell>;
}

type DesignTokenExampleProps = {
  tokensGroup: keyof typeof tokens;
  value: string;
};

function DesignTokenExample({ tokensGroup, value }: DesignTokenExampleProps) {
  switch (tokensGroup) {
    case 'colors':
      return <ColorExample value={value} />;
    case 'sizing':
    case 'spacing':
      return <SizeExample value={value} />;
    case 'borderWidth':
      return (
        <SurfaceExample
          css={css`
            border: ${value} solid ${tokens.colors.navy};
          `}
        />
      );
    case 'borderRadius':
      return (
        <SurfaceExample
          css={css`
            border: ${tokens.borderWidth.medium} solid ${tokens.colors.navy};
            border-radius: ${value};
          `}
        />
      );
    case 'boxShadow':
      return (
        <SurfaceExample
          css={css`
            box-shadow: ${value};
          `}
        />
      );
    case 'fontFamilies':
      return (
        <TypographyExample
          css={css`
            font-family: ${value};
          `}
        />
      );
    case 'fontSizes':
      return (
        <TypographyExample
          css={css`
            font-size: ${value};
          `}
        />
      );
    case 'fontWeights':
      return (
        <TypographyExample
          css={css`
            font-weight: ${value};
          `}
        />
      );
    case 'letterSpacing':
      return (
        <TypographyExample
          css={css`
            letter-spacing: ${value};
          `}
        />
      );
    case 'lineHeights':
      return (
        <TypographyExample
          lineBreak
          css={css`
            font-size: ${tokens.fontSizes.large};
            line-height: ${value};
          `}
        />
      );
    case 'opacity':
      return (
        <SurfaceExample
          css={css`
            background-color: ${tokens.colors.navy};
            opacity: ${value};
          `}
        />
      );
    case 'zIndex':
    case 'breakpoints':
      return <PlainExample />;
    default:
      return null;
  }
}

export default DesignTokenExample;
