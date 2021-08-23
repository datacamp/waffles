import Icon from './icon-base';

type LockedInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function LockedInverted({ size, ...restProps }: LockedInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6 6V3c0-1.552 1.447-3 2.998-3 1.552 0 2.998 1.448 2.998 3v3H13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1zm3.996 0V3c0-.448-.551-1-.998-1C8.552 2 8 2.552 8 3v3h1.996zM9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"
      />
    </Icon>
  );
}

export default LockedInverted;
