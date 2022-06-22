import { Heading } from '../heading';

import {
  contentWrapperStyle,
  emptyStateStyle,
  headingStyle,
  imageStyle,
} from './styles';

type EmptyStateProps = {
  /* Image content element. In general pass Waffles [Asset](/components/asset). */
  image?: JSX.Element;
  /* Content of the body, made up of `EmptyState.List`, `EmptyState.Content` or both. */
  children?: React.ReactNode;
  /* Title heading for the content */
  title?: string;
  /* Specifies the flex-direction value of the content. Default is 'row'. Note: Small screen sizes will always show as a column.  */
  direction?: 'column' | 'row';
  /* Whether the content should be center aligned. Note: Only applicable when `direction` is set to `column`. */
  isCentered?: boolean;
  /* Sets the style of all child elements to be suitable for dark backgrounds. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function EmptyStateInternal({
  image,
  children,
  title,
  direction = 'row',
  isCentered = false,
  inverted = false,
  ...restProps
}: EmptyStateProps) {
  return (
    <div
      css={emptyStateStyle({ direction, isCentered, inverted })}
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
