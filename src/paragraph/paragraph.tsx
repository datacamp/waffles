import { Text } from '../text';
import { paragraphStyle } from './styles';

type ParagraphProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({
  variant = 'primary',
  inverted = false,
  ...restProps
}: ParagraphProps) {
  return (
    <Text as="p" css={paragraphStyle({ variant, inverted })} {...restProps} />
  );
}

export default Paragraph;
