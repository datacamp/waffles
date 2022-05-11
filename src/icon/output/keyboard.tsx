import Icon from '../icon-internal';

type KeyboardProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Keyboard({ size, ...restProps }: KeyboardProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.5h14v9H2v-9zm-2 0a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-9zm5.6 6.3a.6.6 0 0 0 0 1.2h6.8a.6.6 0 0 0 0-1.2H5.6zM12.5 9a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 0 1.2h-.8a.6.6 0 0 1-.6-.6zm.6-3a.6.6 0 0 0 0 1.2h.8a.6.6 0 0 0 0-1.2h-.8zM9.5 9a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 0 1.2h-.8a.6.6 0 0 1-.6-.6zm.6-3a.6.6 0 0 0 0 1.2h.8a.6.6 0 0 0 0-1.2h-.8zM6.5 9a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 0 1.2h-.8a.6.6 0 0 1-.6-.6zm.6-3a.6.6 0 0 0 0 1.2h.8a.6.6 0 0 0 0-1.2h-.8zM3.5 9a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 0 1.2h-.8a.6.6 0 0 1-.6-.6zm.6-3a.6.6 0 0 0 0 1.2h.8a.6.6 0 0 0 0-1.2h-.8z"
      />
    </Icon>
  );
}

export default Keyboard;
