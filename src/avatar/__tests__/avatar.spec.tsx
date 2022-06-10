import { render } from '@testing-library/react';

import { Avatar } from '../index';
import { DataCampBrand } from '../../icon';
import { GitLogomark } from '../../asset';

jest.mock('../../icon', () => {
  return {
    DataCampBrand: () => 'DataCampBrandIcon',
  };
});

jest.mock('../../asset', () => {
  return {
    GitLogomark: () => 'GitLogomarkAsset',
  };
});

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

  it('renders an Avatar with only the first character if a long string is given', () => {
    const { getByText } = render(
      <Avatar content="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />,
    );
    const avatarTextContent = getByText('A').textContent;
    expect(avatarTextContent).toHaveLength(1);
  });

  it('renders an Avatar with different content', () => {
    const { getByText, getByAltText } = render(
      <>
        <Avatar content="A" />
        <Avatar content={<DataCampBrand />} />
        <Avatar content={<GitLogomark />} />
        <Avatar content={<img src="image.png" alt="Avatar test image" />} />
      </>,
    );

    const avatarText = getByText('A');
    expect(avatarText).toBeInTheDocument();
    const avatarIcon = getByText('DataCampBrandIcon');
    expect(avatarIcon).toBeInTheDocument();
    const avatarAsset = getByText('GitLogomarkAsset');
    expect(avatarAsset).toBeInTheDocument();
    const avatarImage = getByAltText('Avatar test image');
    expect(avatarImage).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <div>
              <Avatar variant={variant} size={size} content="A" />
              <Avatar
                variant={variant}
                size={size}
                content={<DataCampBrand />}
              />
              <Avatar variant={variant} size={size} content={<GitLogomark />} />
              <Avatar
                variant={variant}
                size={size}
                content={<img src="image.png" alt="Avatar test image" />}
              />
            </div>,
          );

          const avatar = container.firstChild;
          expect(avatar).toMatchSnapshot();
        });
      });
    });
  });
});
