import { codeStyle } from './styles';

type CodeProps = {
  as?: 'code' | 'pre';
  children: React.ReactNode;
  size?: 'medium' | 'large';
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
