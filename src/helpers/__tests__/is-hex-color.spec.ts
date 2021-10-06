import { isHexColor } from '../index';

describe('isHexColor', () => {
  it('returns true if the HEX color is provided', () => {
    expect(isHexColor('#0033FF')).toEqual(true);
    expect(isHexColor('#03f')).toEqual(true);
    expect(isHexColor('#03ef62')).toEqual(true);
    expect(isHexColor('#FFF')).toEqual(true);
  });

  it('returns false if the color is provaided in different notation than HEX', () => {
    expect(isHexColor('#00334')).toEqual(false);
    expect(isHexColor('#03')).toEqual(false);
    expect(isHexColor('rgba(255, 167, 1, 0.1)')).toEqual(false);
    expect(isHexColor('003342')).toEqual(false);
  });
});
