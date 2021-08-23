import Icon from './icon-base';

type BookmarkInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function BookmarkInverted({ size, ...restProps }: BookmarkInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M4,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,16.8281617 C16,17.3804465 15.5522847,17.8281617 15,17.8281617 C14.7615752,17.8281617 14.5309958,17.742974 14.3498411,17.58796 L8.98819199,13 L3.65142461,17.5821014 C3.23239878,17.9418733 2.6010585,17.8938385 2.24128663,17.4748126 C2.08559725,17.2934814 2,17.0623863 2,16.823388 L2,2 C2,0.8954305 2.8954305,0 4,0 Z"
      />
    </Icon>
  );
}

export default BookmarkInverted;
