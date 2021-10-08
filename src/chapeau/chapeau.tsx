import { Text } from '../text';
import { chapeauStyle } from './styles';

type ChapeauProps = {
  children: React.ReactNode;
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Chapeau({ inverted = false, children, ...restProps }: ChapeauProps) {
  return (
    <Text as="p" css={chapeauStyle({ inverted })} {...restProps}>
      {children}
    </Text>
  );
}

export default Chapeau;
