import Highlight, { defaultProps } from 'prism-react-renderer';

import basicTheme from './editor-theme';

type EditorHighlightProps = {
  children: string;
  theme: typeof basicTheme;
};

function EditorHighlight({ children, theme }: EditorHighlightProps) {
  return (
    <Highlight {...defaultProps} code={children} language="tsx" theme={theme}>
      {({ getLineProps, getTokenProps, style, tokens }) => {
        return (
          <pre style={{ ...style }}>
            {tokens.map((line, index) => {
              return (
                <div key={index} {...getLineProps({ key: index, line })}>
                  {line.map((token, key) => {
                    return (
                      <span key={key} {...getTokenProps({ key, token })} />
                    );
                  })}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
}

export default EditorHighlight;
