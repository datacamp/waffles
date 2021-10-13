import Icon from './icon-internal';

type SparklesInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function SparklesInverted({ size, ...restProps }: SparklesInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4.66 11.712c-.9-.33-.928-1.593-.041-1.885l3.956-1.302L9.877 4.57c.291-.887 1.555-.86 1.885.04l1.475 4.017 4.016 1.475c.9.33.928 1.593.041 1.885l-3.956 1.302-1.302 3.956c-.292.887-1.555.86-1.885-.04l-1.475-4.017-4.017-1.475ZM.718 5.347c-.9-.33-.928-1.594-.041-1.886l1.384-.455.456-1.385c.292-.887 1.555-.86 1.885.04l.516 1.407 1.406.516c.9.33.928 1.593.041 1.885l-1.385.455-.455 1.385c-.292.887-1.555.86-1.886-.04l-.516-1.406L.72 5.347Z"
      />
    </Icon>
  );
}

export default SparklesInverted;
