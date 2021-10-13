import Icon from './icon-internal';

type MedalProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Medal({ size, ...restProps }: MedalProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 0a6 6 0 0 1 4 10.471v7.07l-4.003-1.786L5 17.542v-7.07A6 6 0 0 1 9 0Zm0 12a5.99 5.99 0 0 1-2-.341v2.798l1.997-.892L11 14.46v-2.8A5.99 5.99 0 0 1 9 12ZM9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
    </Icon>
  );
}

export default Medal;
