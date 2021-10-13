import Icon from './icon-internal';

type FlashcardProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Flashcard({ size, ...restProps }: FlashcardProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M14.488 14.953v1.697H0V4.847h1.712v10.105h12.776zM18 1.35H3.512v11.803H18V1.35zM5.231 3.069H16.28v8.364H5.231V3.069z"
      />
    </Icon>
  );
}

export default Flashcard;
