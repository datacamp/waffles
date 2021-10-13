import Icon from './icon-internal';

type ScalaBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ScalaBrand({ size, ...restProps }: ScalaBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m13.97 10.632-.001 3.992c-.007.084-.266 1.684-9.969 2.654v-3.987s9.97-.997 9.97-2.659Zm0-5.316-.001 3.991c-.007.085-.266 1.685-9.969 2.655V7.975s9.97-.997 9.97-2.659Zm0-5.316-.001 3.991c-.007.085-.266 1.685-9.969 2.655V2.658S13.97 1.662 13.97 0Z"
      />
    </Icon>
  );
}

export default ScalaBrand;
