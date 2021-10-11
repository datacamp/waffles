import { tokens } from '../../tokens';
import { readableHexColor } from '../index';

describe('readableHexColor', () => {
  it('returns navy color when passed color is light', () => {
    expect(readableHexColor('#eee')).toEqual(tokens.colors.navy);
    expect(readableHexColor('#FFFFFF')).toEqual(tokens.colors.navy);
    expect(readableHexColor('#ced2d4')).toEqual(tokens.colors.navy);
  });

  it('returns white color when passed color is dark', () => {
    expect(readableHexColor('#222')).toEqual(tokens.colors.white);
    expect(readableHexColor('#000000')).toEqual(tokens.colors.white);
    expect(readableHexColor('#001b33')).toEqual(tokens.colors.white);
  });

  it('returns custom dark color color when passed color is light', () => {
    expect(readableHexColor('#eee', '#222', '#E3E3E5')).toEqual('#222');
    expect(readableHexColor('#FFFFFF', '#222', '#E3E3E5')).toEqual('#222');
    expect(readableHexColor('#ced2d4', '#222', '#E3E3E5')).toEqual('#222');
  });

  it('returns custom light color when passed color is dark', () => {
    expect(readableHexColor('#222', '#222', '#E3E3E5')).toEqual('#E3E3E5');
    expect(readableHexColor('#000000', '#222', '#E3E3E5')).toEqual('#E3E3E5');
    expect(readableHexColor('#001b33', '#222', '#E3E3E5')).toEqual('#E3E3E5');
  });

  it('throws an error when icorrect HEX value is provided', () => {
    const ERROR_MESSAGE =
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.";

    expect(() => {
      readableHexColor('eee');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      readableHexColor('#eee', '2221', '#E3E3E5');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      readableHexColor('#eee', '#222', 'E3E3');
    }).toThrow(ERROR_MESSAGE);
  });
});
