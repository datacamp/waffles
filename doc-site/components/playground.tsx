import { useState } from 'react';
import { css } from '@emotion/react';
import { Compiler, Error, useView } from 'react-view';
import presetTypescript from '@babel/preset-typescript';

import { tokens } from '@datacamp/waffles/tokens';
import type { PlaygroundConfig } from '../types';
import CodePreview from './code-preview';
import Editor from './editor';

const compilerStyle = css`
  padding: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.xlarge};
  margin-top: ${tokens.spacing.small};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-bottom: 0;
  border-top-left-radius: ${tokens.borderRadius.medium};
  border-top-right-radius: ${tokens.borderRadius.medium};
`;

const errorStyle = css`
  background-color: ${tokens.colors.redDark};
  padding: ${tokens.spacing.medium};
  color: ${tokens.colors.greyLight};
  font-family: ${tokens.fontFamilies.mono};
  font-size: ${tokens.fontSizes.small};
  border-bottom-left-radius: ${tokens.borderRadius.medium};
  border-bottom-right-radius: ${tokens.borderRadius.medium};
  white-space: pre;
  overflow: hidden;
`;

const liveLabelStyle = css`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${tokens.colors.greyLight};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.small};
  text-transform: uppercase;
  user-select: none;
  padding: ${tokens.spacing.small} 12px;
`;

type PlaygroundProps = {
  minHeight?: number;
} & PlaygroundConfig;

function Playground({ initialCode, scope, minHeight }: PlaygroundProps) {
  const { compilerProps, editorProps, errorProps } = useView({
    initialCode: initialCode.trim(),
    scope,
  });

  const [isEditorFocused, setIsEditorFocused] = useState(false);

  const hasError = !!errorProps.msg;

  return (
    <>
      <Compiler
        {...compilerProps}
        css={css`
          ${compilerStyle}
          ${minHeight &&
          css`
            min-height: ${minHeight}px;
          `}
        `}
        presets={[presetTypescript]}
      />
      <CodePreview
        css={css`
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: ${hasError
            ? 0
            : tokens.borderRadius.medium};
          border-bottom-right-radius: ${hasError
            ? 0
            : tokens.borderRadius.medium};
          border-left-color: ${isEditorFocused
            ? tokens.colors.green
            : tokens.colors.purple};
        `}
      >
        <Editor {...editorProps} setIsFocused={setIsEditorFocused} />
        <span
          css={css`
            ${liveLabelStyle}
            opacity: ${isEditorFocused ? 1 : tokens.opacity.medium};
          `}
        >
          Live
        </span>
      </CodePreview>
      <Error {...errorProps} css={errorStyle} />
    </>
  );
}

export default Playground;
