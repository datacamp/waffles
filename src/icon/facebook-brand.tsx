import Icon from './icon-base';

type FacebookBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function FacebookBrand({ size, ...restProps }: FacebookBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M10.33,18.0001255 L10.33,9.79012552 L13.203,9.79012552 L13.633,6.59012552 L10.33,6.59012552 L10.33,4.54512552 C10.33,3.61912552 10.597,2.98812552 11.985,2.98812552 L13.751,2.98712552 L13.751,0.125125519 C12.8950593,0.0391204003 12.0352464,-0.00260188431 11.175,0.000125518516 C8.627,0.000125518516 6.882,1.49112552 6.882,4.23012552 L6.882,6.59012552 L4,6.59012552 L4,9.79012552 L6.882,9.79012552 L6.882,18.0001255 L10.329,18.0001255 L10.33,18.0001255 Z"
      />
    </Icon>
  );
}

export default FacebookBrand;
