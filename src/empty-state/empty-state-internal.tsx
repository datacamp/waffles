import { useRef } from 'react';

import { Heading } from '../heading';

import useSmallColumn from './use-small-column';
import {
  contentWrapperStyle,
  emptyStateStyle,
  headingStyle,
  imageStyle,
} from './styles';

type EmptyStateBaseProps = {
  /* Image content element. In general pass Waffles [Asset](/components/asset). */
  image?: JSX.Element;
  /* Content of the body, made up of `EmptyState.List`, `EmptyState.Content` or both. */
  children?: React.ReactNode;
  /* Title heading for the content */
  title?: string;
  /* Sets the style of all child elements to be suitable for dark backgrounds. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type EmptyStateDirectionCenteredProps =
  | {
      /* Specifies the flex-direction value of the content. If no value is provided, 'row' will be used. Note: Small screen sizes will always show as a column.  */
      direction?: 'row' | undefined;
      /* Whether the content should be center aligned. Note: Can only be true when `direction` is set to `column`. */
      isCentered?: never;
    }
  | { direction: 'column'; isCentered?: boolean };

function EmptyStateInternal({
  image,
  children,
  title,
  direction,
  isCentered,
  inverted = false,
  ...restProps
}: EmptyStateDirectionCenteredProps & EmptyStateBaseProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasSmallColumn = useSmallColumn(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      css={emptyStateStyle({
        direction: hasSmallColumn ? 'column' : direction || 'row',
        isCentered: !!isCentered,
        inverted,
      })}
      {...restProps}
    >
      {image && <div css={imageStyle}>{image}</div>}
      <div css={contentWrapperStyle}>
        {title && (
          <Heading css={headingStyle} size={'xlarge'} inverted={inverted}>
            {title}
          </Heading>
        )}
        {children}
      </div>
    </div>
  );
}

export default EmptyStateInternal;
