import { Checkmark as Icon } from '../icon';
import { checkmarkStyle } from './styles';

type BoxProps = {
  checked: boolean;
  isFocusVisible: boolean;
};

function Checkmark({ checked, isFocusVisible }: BoxProps) {
  return (
    <div css={checkmarkStyle({ checked, isFocusVisible })}>
      {checked && <Icon size="small" />}
    </div>
  );
}

export default Checkmark;
