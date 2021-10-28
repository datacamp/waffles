import { Checkmark as Icon } from '../icon';
import { checkmarkStyle } from './styles';

type CheckmarkProps = {
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Checkmark({ checked, error, isFocusVisible }: CheckmarkProps) {
  return (
    <div css={checkmarkStyle({ checked, isFocusVisible, hasError: error })}>
      {checked && <Icon size="small" />}
    </div>
  );
}

export default Checkmark;
