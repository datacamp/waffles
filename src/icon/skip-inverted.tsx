import Icon from './icon-internal';

type SkipInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function SkipInverted({ size, ...restProps }: SkipInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m6.145 4.34 4.466 2.978a1.985 1.985 0 0 1 .004 3.31l-4.466 2.994a2.03 2.03 0 0 1-2.802-.534A1.983 1.983 0 0 1 3 11.968v-5.97C3 4.893 3.903 4 5.018 4c.401 0 .794.119 1.127.34Zm6.837.79c0-.551.452-.998 1.01-.998.556 0 1.008.447 1.008.999V13c0 .552-.452.999-1.009.999A1.004 1.004 0 0 1 12.982 13V5.13Z"
      />
    </Icon>
  );
}

export default SkipInverted;
