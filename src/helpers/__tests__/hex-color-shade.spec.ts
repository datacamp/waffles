import { hexColorShade } from '../index';

describe('hexColorShade', () => {
  it('make color lighter when positive amount is provided', () => {
    expect(hexColorShade('#0033FF', 0.4)).toEqual('#6699FF');
    expect(hexColorShade('#03f', 0.4)).toEqual('#6699FF');
    expect(hexColorShade('#0B3A3F', 1)).toEqual('#FFFFFF');
  });

  it('make color darker when negative amount is provided', () => {
    expect(hexColorShade('#AA33FF', -0.4)).toEqual('#440099');
    expect(hexColorShade('#a3f', -0.4)).toEqual('#440099');
    expect(hexColorShade('#4B3A3F', -1)).toEqual('#000000');
  });

  it('throws an error when icorrect HEX value is provided', () => {
    const ERROR_MESSAGE =
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.";

    expect(() => {
      hexColorShade('abc', 0.1);
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexColorShade('rgba(255, 16, 25, 0.4)', 0.1);
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexColorShade('#1AB4', 0.1);
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexColorShade('#00X', 0.1);
    }).toThrow(ERROR_MESSAGE);
  });

  it('throws an error when invalid amount is provided', () => {
    const ERROR_MESSAGE =
      'Invalid amount value. Please provide a value in range between -1 and 1.';

    expect(() => {
      hexColorShade('#0033FF', -1.5);
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexColorShade('#ab334a', 1.5);
    }).toThrow(ERROR_MESSAGE);
  });
});
