import hexToRgba from './hex-to-rgba';

const rgbaRegex =
  /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

/**
 * Calculate HEX color luminance
 *
 * @param hexColor HEX color code, starts with hash followed by either 3 or 6 digits
 * @returns HEX color luminance, value between 0 (luminance of black) and 1 (luminance of white)
 */
function hexColorLuminance(hexColor: string): number {
  const rgbaColor = hexToRgba(hexColor);
  const rgbaMatched = rgbaRegex.exec(rgbaColor);

  if (!rgbaMatched) {
    throw new Error("Couldn't parse the RGBA color string.");
  }

  // Grab red, green, blue channels, since we don't need alpha
  const channels = [1, 2, 3].map((index) => {
    return parseInt(`${rgbaMatched[index]}`, 10);
  });

  const [r, g, b] = channels.map((value) => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

export default hexColorLuminance;
