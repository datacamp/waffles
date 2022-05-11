import Icon from '../icon-internal';

type PhoneProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Phone({ size, ...restProps }: PhoneProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m15.264 12.728-2.122-2.121-1.256 1.256a1 1 0 0 1-1.301.097 21.159 21.159 0 0 1-4.453-4.453 1 1 0 0 1 .097-1.301L7.485 4.95 5.364 2.828 2.769 5.423a18.947 18.947 0 0 0 4.01 5.89 18.947 18.947 0 0 0 5.89 4.01l2.595-2.595Zm-4.17-2.902.634-.634a2 2 0 0 1 2.828 0l2.122 2.122a2 2 0 0 1 0 2.828l-3.066 3.066a1 1 0 0 1-1.072.224 20.931 20.931 0 0 1-7.176-4.704A20.931 20.931 0 0 1 .66 5.552 1 1 0 0 1 .884 4.48L3.95 1.414a2 2 0 0 1 2.828 0L8.9 3.536a2 2 0 0 1 0 2.828l-.634.634a19.23 19.23 0 0 0 2.828 2.828Z"
      />
    </Icon>
  );
}

export default Phone;
