import { render } from '@testing-library/react';

import { Avatar } from '../index';
import { DataCampBrand } from '../../icon';
import { GitLogomark } from '../../asset';

const sizes = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'huge',
] as const;
const variants = [
  'green',
  'navy',
  'white',
  'red',
  'orange',
  'yellow',
  'blue',
  'purple',
  'pink',
  'grey',
  'greySubtle',
] as const;

describe('Avatar', () => {
  it('renders an Avatar', () => {
    const { getByText } = render(<Avatar content="A" />);
    const avatarText = getByText('A');

    expect(avatarText).toBeInTheDocument();
  });

  it('renders an Avatar with different content', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <>
        <Avatar content="A" />
        <Avatar content={<DataCampBrand data-testid="avatar-icon" />} />
        <Avatar content={<GitLogomark data-testid="avatar-asset" />} />
        <Avatar content={<img src="" alt="Avatar test image" />} />
      </>,
    );

    const avatarText = getByText('A');
    expect(avatarText).toBeInTheDocument();
    const avatarIcon = getByTestId('avatar-icon');
    expect(avatarIcon).toBeInTheDocument();
    const avatarAsset = getByTestId('avatar-asset');
    expect(avatarAsset).toBeInTheDocument();
    const avatarImage = getByAltText('Avatar test image');
    expect(avatarImage).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <>
              <Avatar
                variant={variant}
                size={size}
                content={<DataCampBrand />}
              />
              <Avatar variant={variant} size={size} content={<GitLogomark />} />
              <Avatar
                variant={variant}
                size={size}
                content={<img src="" alt="Avatar test image" />}
              />
              <Avatar variant={variant} size={size} content="A" />
            </>,
          );

          const avatar = container.firstChild;
          expect(avatar).toMatchSnapshot();
        });
      });
    });
  });
});
