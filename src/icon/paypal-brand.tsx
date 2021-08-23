import Icon from './icon-base';

type PaypalBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PaypalBrand({ size, ...restProps }: PaypalBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6.604 9.677h1.659c3.604 0 5.649-1.623 6.3-4.96.02-.11.04-.216.056-.322.036-.226.054-.429.062-.624.006-.134.01-.213.009-.287a2.643 2.643 0 0 0-.216-1.039c-.13-.296-.324-.587-.613-.918C13.008.557 11.52 0 9.747 0H4.094a.81.81 0 0 0-.8.683l-1.02 6.571-1.268 8.185a.486.486 0 0 0 .48.561h2.772l.849-5.043a1.51 1.51 0 0 1 1.497-1.28zm9.103-4.587c-.792 3.771-3.357 5.772-7.445 5.772H6.604a.331.331 0 0 0-.328.282L5.17 18h2.907a.707.707 0 0 0 .699-.597l.029-.15.555-3.514.036-.194a.707.707 0 0 1 .699-.597h.44c2.85 0 5.08-1.158 5.733-4.506.268-1.38.132-2.534-.562-3.352z"
      />
    </Icon>
  );
}

export default PaypalBrand;
