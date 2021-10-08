import { Text } from '../text';
import { displayStyle } from './styles';

type DisplayProps = {
  children: React.ReactNode;
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Display({ inverted = false, children, ...restProps }: DisplayProps) {
  return (
    <Text as="p" css={displayStyle({ inverted })} {...restProps}>
      {children}
    </Text>
  );
}

export default Display;
