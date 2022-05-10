import { chapeauStyle } from './styles';

import { Text } from '../text';

type ChapeauProps = {
  /* Text content of the chapeau. */
  children: React.ReactNode;
  /* Sets the style of the chapeau suitable for dark backgrounds. */
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
