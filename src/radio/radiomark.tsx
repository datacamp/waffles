import { radiomarkStyle, radioIconStyle } from './styles';

type RadiomarkProps = {
  inverted: boolean;
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Radiomark({
  inverted,
  checked,
  error,
  isFocusVisible,
}: RadiomarkProps) {
  return (
    <div
      css={radiomarkStyle({
        inverted,
        checked,
        isFocusVisible,
        hasError: error,
      })}
    >
      {checked && <span css={radioIconStyle({ inverted })} />}
    </div>
  );
}

export default Radiomark;
