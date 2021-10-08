import { Text } from '../text';
import { paragraphStyle } from './styles';

type ParagraphProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({
  variant = 'primary',
  size = 'medium',
  inverted = false,
  ...restProps
}: ParagraphProps) {
  return (
    <Text
      as="p"
      css={paragraphStyle({ variant, size, inverted })}
      {...restProps}
    />
  );
}

export default Paragraph;
