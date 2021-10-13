import Icon from './icon-internal';

type PaypalBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PaypalBrand({ size, ...restProps }: PaypalBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7.04 9.677h1.524c3.604 0 5.853-1.638 6.504-4.975.021-.11.24-1.404-.089-2.272C14.152.248 11.823 0 10.05 0H4.49a.81.81 0 0 0-.8.683L2.67 7.254 1.4 15.439a.486.486 0 0 0 .48.561h2.815l.849-5.043a1.51 1.51 0 0 1 1.497-1.28zm8.934-4.43c-.792 3.772-3.323 5.615-7.41 5.615h-1.66a.331.331 0 0 0-.328.282L5.472 18H8.38a.707.707 0 0 0 .7-.597l.583-3.664.036-.194a.707.707 0 0 1 .7-.597h.44c2.85 0 5.025-1.155 5.677-4.503.268-1.38.153-2.38-.541-3.197z"
      />
    </Icon>
  );
}

export default PaypalBrand;
