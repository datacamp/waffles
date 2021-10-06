import isHexColor from './is-hex-color';

// Make sure color channel value fints in range between 0 and 255
function clampColorChannel(value: number) {
  return Math.max(Math.min(255, value), 0).toString(16);
}

/**
 * Make HEX color darker or lighter
 *
 * @param hexColor HEX color code, starts with hash followed by either 3 or 6 digits
 * @param amount To lighten color provide value in range between 0 and 1 (where 1 is pure white), and to darken in range from 0 to -1 (where -1 is pitch black)
 * @returns HEX color code
 */
function hexColorShade(hexColor: string, amount: number) {
  if (!isHexColor(hexColor)) {
    throw new Error(
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.",
    );
  }
  if (amount < -1 || amount > 1) {
    throw new Error(
      'Invalid amount value. Please provide a value in range between -1 and 1.',
    );
  }

  const normalizedAmount = Math.trunc(255 * amount);
  const colorCode = hexColor.slice(1); // remove hash
  const group = colorCode.length / 3;

  return `#${[0, 1, 2]
    .map((index) => {
      return colorCode.slice(index * group, (index + 1) * group);
    })
    .map((value) => {
      return parseInt((value + value).slice(-2), 16) + normalizedAmount;
    })
    .map((adjustedValue) => {
      return clampColorChannel(adjustedValue).padStart(2, '0').toUpperCase();
    })
    .join('')}`;
}

export default hexColorShade;
