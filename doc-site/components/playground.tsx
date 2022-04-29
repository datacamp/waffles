import { Compiler, Error, useView } from 'react-view';
import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Back } from '@datacamp/waffles/icon';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Button } from '@datacamp/waffles/button';
import presetTypescript from '@babel/preset-typescript';

import PreviewControls from './preview-controls';
import Editor from './editor';
import { CODE_PREVIEW_BORDER } from './constants';
import CodePreview from './code-preview';

import type { PlaygroundConfig } from '../types';

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
  white-space: pre;
  overflow: hidden;
`;

const liveLabelStyle = css`
  position: absolute;
  bottom: 0;
  right: -${CODE_PREVIEW_BORDER};
  z-index: ${tokens.zIndex.default};
  color: ${tokens.colors.greyLight};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.small};
  text-transform: uppercase;
  user-select: none;
  padding: ${tokens.spacing.small} 20px;
`;

type PlaygroundProps = {
  minHeight?: number;
} & PlaygroundConfig;

function Playground({ initialCode, scope, minHeight }: PlaygroundProps) {
  const { actions, compilerProps, editorProps, errorProps } = useView({
    initialCode: initialCode.trim(),
    scope,
  });
  const { reset } = actions;

  const [isEditorFocused, setIsEditorFocused] = useState(false);

  return (
    <ErrorBoundary>
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
          border-left-color: ${isEditorFocused
            ? tokens.colors.green
            : tokens.colors.purple};
          overflow: hidden;
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
      <PreviewControls>
        <Button
          variant="plain"
          size="small"
          iconLeft={<Back />}
          onClick={reset}
        >
          Reset
        </Button>
      </PreviewControls>
    </ErrorBoundary>
  );
}

export default Playground;
