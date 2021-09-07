import { Text } from '../text';
import { displayStyle } from './styles';

type DisplayProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Display(props: DisplayProps) {
  return <Text as="p" css={displayStyle()} {...props} />;
}

export default Display;
