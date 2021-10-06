import isHexColor from './is-hex-color';

/**
 * Convert HEX color to RGBA counterpart, with optional alpha setting
 *
 * @param hexColor HEX color code, starts with hash followed by either 3 or 6 digits
 * @param alpha Adjusted opacity of the color, 0 means fully transparent and 1 fully opaque
 * @returns RGBA color code
 */
function hexToRgba(hexColor: string, alpha = 1) {
  if (!isHexColor(hexColor)) {
    throw new Error(
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.",
    );
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error(
      'Invalid alpha value. Please provide a value in range between 0 and 1.',
    );
  }

  const colorCode = hexColor.slice(1); // remove hash
  const group = colorCode.length / 3;
  return `rgba(${[0, 1, 2]
    .map((index) => {
      return colorCode.slice(index * group, (index + 1) * group);
    })
    .map((value) => {
      return parseInt((value + value).slice(-2), 16).toString();
    })
    .concat(alpha.toString())
    .join(', ')})`;
}

export default hexToRgba;
