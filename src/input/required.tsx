import { Text } from '../text';
import { requiredStyle, requiredBulletStyle } from './styles';

function Required() {
  return (
    <Text css={requiredStyle()}>
      <span css={requiredBulletStyle()}>&bull;</span> Required
    </Text>
  );
}

export default Required;
