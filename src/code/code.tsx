import { codeStyle } from './styles';

type CodeProps = {
  children: React.ReactNode;
  size?: 'medium' | 'large';
  inverted?: boolean;
} & React.HTMLAttributes<HTMLElement>;

function Code({ size = 'medium', inverted = false, ...restProps }: CodeProps) {
  return <code css={codeStyle({ size, inverted })} {...restProps} />;
}

export default Code;
