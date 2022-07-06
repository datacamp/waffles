import { useRef } from 'react';

import { Heading } from '../heading';

import useVertical from './use-vertical';
import {
  contentWrapperStyle,
  emptyStateStyle,
  headingStyle,
  imageStyle,
} from './styles';

type EmptyStateBaseProps = {
  /* Image next to or above content, depending on `orientation`. In general pass Waffles [Asset](/components/asset). */
  image?: JSX.Element;
  /* Content of the component, can include `EmptyState.List` and any Waffles or custom component. */
  children?: React.ReactNode;
  /* Title for the content. */
  title?: React.ReactNode;
  /* Specifies in which layout the component is organised. If no value is provided, `horizontal` will be used. Note: Small screen sizes will always show as vertical.  */
  orientation?: 'horizontal' | 'vertical';
  /* Whether the content should be center aligned. **Note**: Can only be true when `orientation` is set to `vertical`. */
  isCentered?: boolean;
  /* Sets the color of all internal child elements to be suitable for dark backgrounds. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

// Additional type to handle restricting `isCentered` to only be usable when it the orientation is vertical
type EmptyStateDirectionCenteredProps =
  | {
      orientation?: 'horizontal' | undefined;
      isCentered?: never;
    }
  | {
      orientation: 'vertical';
      isCentered?: boolean;
    };

function EmptyStateInternal({
  image,
  children,
  title,
  orientation,
  isCentered,
  inverted = false,
  ...restProps
}: EmptyStateBaseProps & EmptyStateDirectionCenteredProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const useVerticalOrientation = useVertical(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      css={emptyStateStyle({
        orientation: useVerticalOrientation
          ? 'vertical'
          : orientation || 'horizontal',
        isCentered: !!isCentered,
        inverted,
      })}
      {...restProps}
    >
      {image && <div css={imageStyle()}>{image}</div>}
      <div css={contentWrapperStyle()}>
        {title && (
          <Heading css={headingStyle()} size="xlarge" inverted={inverted}>
            {title}
          </Heading>
        )}
        {children}
      </div>
    </div>
  );
}

export default EmptyStateInternal;
