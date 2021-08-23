import Icon from './icon-base';

type HiddenInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function HiddenInverted({ size, ...restProps }: HiddenInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m6.227 15.45 9.897-9.896C17.265 6.75 18 8.024 18 9c0 2.51-4.858 7-9 7-.915 0-1.858-.203-2.773-.55zm-4.26-2.81C.77 11.423 0 10.082 0 9c0-2.697 4.791-7 9-7 .969 0 1.977.246 2.952.654L1.967 12.64zM14.02 2.707a1 1 0 1 1 1.414 1.414L4.121 15.435a1 1 0 0 1-1.414-1.414L14.021 2.707z"
      />
    </Icon>
  );
}

export default HiddenInverted;
