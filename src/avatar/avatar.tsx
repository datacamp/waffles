/** @jsx jsx */
import React from 'react';

import { avatarContentWrapperStyle, avatarWrapperStyle } from './styles';

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
    | 'huge';
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
  /* Content of the avatar component. In general pass Waffles [Asset](/components/asset), [Icon](/components/icon), regular image or a string containing only one character. Must be single element or string. */
  content: JSX.Element | string;
  /* Whether the content should fill the whole avatar space or be restricted to the default avatar sizing values.  */
  contentFill?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Avatar({
  size = 'medium',
  variant = 'navy',
  content,
  contentFill = false,
  ...restProps
}: AvatarProps) {
  if (typeof content === 'string' && content.length > 1) {
    // eslint-disable-next-line no-console
    console.warn(
      'Waffles Warning: The avatar content string must not have a length of greater than 1.',
    );
  }

  return (
    <div css={avatarWrapperStyle({ size, variant })} {...restProps}>
      <div css={avatarContentWrapperStyle({ size, contentFill })}>
        {content}
      </div>
    </div>
  );
}

export default Avatar;
