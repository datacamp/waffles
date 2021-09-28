import { hexToRgba } from '../index';

describe('hexToRgba', () => {
  it('converts HEX color value to RGB counterpart when opacity is not provided', () => {
    expect(hexToRgba('#0033FF')).toEqual('rgba(0, 51, 255, 1)');
    expect(hexToRgba('#03f')).toEqual('rgba(0, 51, 255, 1)');
    expect(hexToRgba('#03ef62')).toEqual('rgba(3, 239, 98, 1)');
  });

  it('converts HEX color value to RGBA counterpart when opacity is provided', () => {
    expect(hexToRgba('#0033ff', 0.5)).toEqual('rgba(0, 51, 255, 0.5)');
    expect(hexToRgba('#03f', 0.5)).toEqual('rgba(0, 51, 255, 0.5)');
    expect(hexToRgba('#03f', 1)).toEqual('rgba(0, 51, 255, 1)');
    expect(hexToRgba('#03f', 0)).toEqual('rgba(0, 51, 255, 0)');
    expect(hexToRgba('#03ef62', 0.3)).toEqual('rgba(3, 239, 98, 0.3)');
    expect(hexToRgba('#03EF62', 1)).toEqual('rgba(3, 239, 98, 1)');
    expect(hexToRgba('#03ef62', 0)).toEqual('rgba(3, 239, 98, 0)');
  });

  it('throws an error when icorrect HEX value is provided', () => {
    const ERROR_MESSAGE =
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.";

    expect(() => {
      hexToRgba('abc');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexToRgba('');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexToRgba('#');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexToRgba('#ABC1');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexToRgba('#AB');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexToRgba('#abb34a7');
    }).toThrow(ERROR_MESSAGE);
  });
});
