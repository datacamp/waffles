import Icon from './icon-internal';

type ForwardProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Forward({ size, ...restProps }: ForwardProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9.21 4.988 8.092 6.626a1.005 1.005 0 0 0 .26 1.395.998.998 0 0 0 1.39-.262l2.196-3.217c.24-.353.232-.82-.022-1.164L9.721.406A.998.998 0 0 0 8.322.197c-.444.33-.537.958-.208 1.403l1.022 1.385A7.663 7.663 0 0 0 9 2.977c-4.155 0-7.523 3.358-7.523 7.5 0 4.142 3.368 7.5 7.523 7.5 4.155 0 7.523-3.358 7.523-7.5-.042-.529-.392-.793-1.051-.793-.659 0-.976.264-.952.793h-.003c0 3.037-2.47 5.5-5.517 5.5s-5.517-2.463-5.517-5.5c0-3.038 2.47-5.5 5.517-5.5.079 0 .149.003.21.01Z"
      />
    </Icon>
  );
}

export default Forward;
