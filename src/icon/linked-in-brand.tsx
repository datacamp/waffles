import Icon from './icon-base';

type LinkedInBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function LinkedInBrand({ size, ...restProps }: LinkedInBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C0 1 .8 0 2 0s2 .9 2 2zM0 18h4V5H0v13zM13.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H5.9c0 1.1.1 2.4.1 3.9V18h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V18h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"
      />
    </Icon>
  );
}

export default LinkedInBrand;
