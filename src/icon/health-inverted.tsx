import Icon from './icon-base';

type HealthInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function HealthInverted({ size, ...restProps }: HealthInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M12,6 L12,2.5 C12,1.67157288 11.3284271,1 10.5,1 L7.5,1 C6.67157288,1 6,1.67157288 6,2.5 L6,6 L2.5,6 C1.67157288,6 1,6.67157288 1,7.5 L1,10.5 C1,11.3284271 1.67157288,12 2.5,12 L6,12 L6,15.5 C6,16.3284271 6.67157288,17 7.5,17 L10.5,17 C11.3284271,17 12,16.3284271 12,15.5 L12,12 L15.5,12 C16.3284271,12 17,11.3284271 17,10.5 L17,7.5 C17,6.67157288 16.3284271,6 15.5,6 L12,6 Z"
      />
    </Icon>
  );
}

export default HealthInverted;
