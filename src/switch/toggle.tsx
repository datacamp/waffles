import { Checkmark as Icon } from '../icon';
import { toggleStyle, handleStyle } from './styles';

type ToggleProps = {
  inverted: boolean;
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Toggle({ inverted, checked, error, isFocusVisible }: ToggleProps) {
  return (
    <div
      css={toggleStyle({
        inverted,
        checked,
        isFocusVisible,
        hasError: error,
      })}
    >
      <span css={handleStyle({ inverted, checked })}>
        {checked && <Icon size="small" />}
      </span>
    </div>
  );
}

export default Toggle;
