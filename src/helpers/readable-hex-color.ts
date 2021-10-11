import { tokens } from '../tokens';
import hexColorLuminance from './hex-color-luminance';
import isHexColor from './is-hex-color';

/**
 * For best contrast depending whether provided HEX color is dark or light return white or navy color from design colors.
 * It is possible to specify custom colors.
 *
 * @param hexColor HEX color code, starts with hash followed by either 3 or 6 digits
 * @param [returnIfLight] Color returned if provided color is ligth
 * @param [returnIfDark] Color returned if provided color is dark
 * @returns White or navy from design tokens, or one of optional passed HEX colors
 */
function readableHexColor(
  hexColor: string,
  returnIfLight: string = tokens.colors.navy,
  returnIfDark: string = tokens.colors.white,
) {
  if (
    !isHexColor(hexColor) ||
    !isHexColor(returnIfLight) ||
    !isHexColor(returnIfDark)
  ) {
    throw new Error(
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.",
    );
  }

  // Compare to luminance of neutral grey color in the middle of the RGB scale
  const isColorLight = hexColorLuminance(hexColor) > 0.179;

  return isColorLight ? returnIfLight : returnIfDark;
}

export default readableHexColor;
