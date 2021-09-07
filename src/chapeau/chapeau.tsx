import { Text } from '../text';
import { chapeauStyle } from './styles';

type ChapeauProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Chapeau(props: ChapeauProps) {
  return <Text as="p" css={chapeauStyle()} {...props} />;
}

export default Chapeau;
