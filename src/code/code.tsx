import { codeStyle } from './styles';

type CodeProps = {
  /* The content of the inline code sample. */
  children: React.ReactNode;
  /* The element used to render this component. */
  as?: 'code' | 'pre';
  /* Defines the font size of the inline code sample. */
  size?: 'medium' | 'large';
  /* Sets the style of the inline code sample suitable for dark backgrounds. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLElement>;

function Code({
  as,
  size = 'medium',
  inverted = false,
  ...restProps
}: CodeProps) {
  const Element = as || 'code';

  return <Element css={codeStyle({ size, inverted })} {...restProps} />;
}

export default Code;
