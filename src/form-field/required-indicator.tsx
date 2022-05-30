import { Text } from '../text';

import { requiredIndicatorStyle, requiredMarkerStyle } from './styles';
import FormField from './form-field';

type RequiredIndicatorProps = {
  isRequired: boolean;
  indicator: NonNullable<
    React.ComponentProps<typeof FormField>['requiredIndicator']
  >;
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
};

function RequiredIndicator({
  isRequired,
  indicator,
  inverted,
  size,
}: RequiredIndicatorProps) {
  function renderIndicator() {
    if (indicator === 'showOptional' && !isRequired) {
      return 'Optional';
    } else if (indicator === 'showRequired' && isRequired) {
      return (
        <>
          <span css={requiredMarkerStyle({ inverted })}>&bull;</span>Required
        </>
      );
    }
    return null;
  }

  return (
    <Text css={requiredIndicatorStyle({ inverted, size })} aria-hidden>
      {renderIndicator()}
    </Text>
  );
}

export default RequiredIndicator;
