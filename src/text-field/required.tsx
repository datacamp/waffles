import { Text } from '../text';
import { requiredStyle, requiredBulletStyle } from './styles';

type RequiredProps = {
  inverted: boolean;
};

function Required({ inverted }: RequiredProps) {
  return (
    <Text css={requiredStyle({ inverted })}>
      <span css={requiredBulletStyle({ inverted })}>&bull;</span> Required
    </Text>
  );
}

export default Required;
