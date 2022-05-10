import { TEditorProps as BaseEditorProps, useValueDebounce } from 'react-view';
import SimpleEditor from 'react-simple-code-editor';
import React from 'react';

import baseTheme from './editor-theme';
import Highlight from './editor-highlight';

const editorTheme = {
  ...baseTheme,
  plain: {
    whiteSpace: 'break-spaces',
    ...baseTheme.plain,
  },
};

type EditorProps = {
  setIsFocused: (isFocused: boolean) => void;
} & BaseEditorProps;

function Editor({
  code: globalCode = '',
  onChange,
  placeholder,
  setIsFocused,
}: EditorProps) {
  const [code, setCode] = useValueDebounce(globalCode, onChange);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `.npm__react-simple-code-editor__textarea { outline: none !important }`,
        }}
      />
      <SimpleEditor
        highlight={(code) => <Highlight theme={editorTheme}>{code}</Highlight>}
        ignoreTabKey={true}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onValueChange={(code) => setCode(code)}
        placeholder={placeholder}
        style={editorTheme.plain as React.CSSProperties}
        value={code}
      />
    </>
  );
}

export default Editor;
