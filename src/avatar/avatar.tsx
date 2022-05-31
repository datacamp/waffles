import React from 'react';

import { avatarWrapperStyle } from './styles';

type AvatarProps = {
  /* Defines the size of the avatar. In general use default `medium` size. */
  size?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  /* Determines the variant of the avatar, based on the set of predefined background colors. */
  variant:
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
  /* Inner content component of the avatar. In general pass Waffles [Asset](/components/asset), [Icon](/components/icon), native image element or a string containing at most two characters. Must be single element or string. */
  content: React.ReactNode | string;
} & React.HTMLAttributes<HTMLDivElement>;

function Avatar({
  size = 'medium',
  variant = 'navy',
  content,
  ...restProps
}: AvatarProps) {
  if (typeof content === 'string' && content.length > 2) {
    throw new Error(
      'The content string must not have a length of greater than 2.',
    );
  }

  return (
    <div css={avatarWrapperStyle({ size, variant })} {...restProps}>
      {content}
    </div>
  );
}

export default Avatar;
