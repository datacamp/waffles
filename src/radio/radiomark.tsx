import { radiomarkStyle, radioIconStyle } from './styles';

type RadiomarkProps = {
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Radiomark({ checked, error, isFocusVisible }: RadiomarkProps) {
  return (
    <div css={radiomarkStyle({ checked, isFocusVisible, hasError: error })}>
      {checked && <span css={radioIconStyle()} />}
    </div>
  );
}

export default Radiomark;
