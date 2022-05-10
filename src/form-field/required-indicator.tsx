import { requiredIndicatorStyle, requiredMarkerStyle } from './styles';
import FormField from './form-field';

import { Text } from '../text';

type RequiredIndicatorProps = {
  isRequired: boolean;
  indicator: NonNullable<
    React.ComponentProps<typeof FormField>['requiredIndicator']
  >;
  inverted: boolean;
};

function RequiredIndicator({
  isRequired,
  indicator,
  inverted,
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
    <Text css={requiredIndicatorStyle({ inverted })} aria-hidden>
      {renderIndicator()}
    </Text>
  );
}

export default RequiredIndicator;
