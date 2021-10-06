const hexRegex = /^#([a-fA-F0-9]{3}){1,2}$/;

/**
 * Check whether color is provided in HEX notation or not
 *
 * @param color Color code
 * @returns True or false
 */
function isHexColor(color: string) {
  return hexRegex.test(color);
}

export default isHexColor;
