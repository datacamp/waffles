import React, { cloneElement } from 'react';

import * as allIcons from '../icon';

import {
  avatarContentWrapperStyle,
  avatarIconStyle,
  avatarWrapperStyle,
} from './styles';

type AvatarProps = {
  /* Defines the size of the avatar. In general use default `medium` size. */
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  /* Determines the variant of the avatar, based on the set of predefined background colors. */
  variant?:
    | 'green'
    | 'navy'
    | 'white'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'grey'
    | 'greySubtle';
  /* Inner content component of the avatar. In general pass Waffles [Asset](/components/asset), [Icon](/components/icon), native image element or a string containing only one character. Must be single element or string. */
  content: JSX.Element | string;
} & React.HTMLAttributes<HTMLDivElement>;

// Size map for matching icon size to Avatar size
const iconSizeMap = {
  xxsmall: '10px',
  xsmall: '14px',
  small: '18px',
  medium: '22px',
  large: '36px',
  xlarge: '56px',
  xxlarge: '76px',
  xxxlarge: '96px',
};

function Avatar({
  size = 'medium',
  variant = 'navy',
  content,
  ...restProps
}: AvatarProps) {
  if (typeof content === 'string' && content.length > 1) {
    throw new Error(
      'The content string must not have a length of greater than 1.',
    );
  }

  return (
    <div css={avatarWrapperStyle({ size, variant })} {...restProps}>
      <div css={avatarContentWrapperStyle}>
        {/* TODO: Update allIcons keys to config reference? */}
        {Object.keys(allIcons).includes((content as JSX.Element).type?.name)
          ? cloneElement(content as JSX.Element, {
              height: iconSizeMap[size],
              width: iconSizeMap[size],
              css: avatarIconStyle,
            })
          : content}
      </div>
    </div>
  );
}

export default Avatar;
