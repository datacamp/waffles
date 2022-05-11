import { Checkmark as Icon } from '../icon';

import { checkmarkStyle } from './styles';

type CheckmarkProps = {
  inverted: boolean;
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Checkmark({
  inverted,
  checked,
  error,
  isFocusVisible,
}: CheckmarkProps) {
  return (
    <div
      css={checkmarkStyle({
        inverted,
        checked,
        isFocusVisible,
        hasError: error,
      })}
    >
      {checked && <Icon size="small" />}
    </div>
  );
}

export default Checkmark;
