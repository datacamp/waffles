import Icon from './icon-base';

type MicrophoneProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Microphone({ size, ...restProps }: MicrophoneProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 16v-1.07C4.461 14.426 1.5 11.335 1.5 8a1 1 0 1 1 2 0c0 2.517 2.62 5 5.5 5s5.5-2.483 5.5-5a1 1 0 0 1 2 0c0 3.336-2.961 6.427-6.5 6.93V16h1.5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2H8zM9 2a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4A1.5 1.5 0 0 0 9 2zm0-2a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-7 0v-4A3.5 3.5 0 0 1 9 0z"
      />
    </Icon>
  );
}

export default Microphone;
