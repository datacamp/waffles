import Icon from './icon-base';

type EducationProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Education({ size, ...restProps }: EducationProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m9 14.776 4-1.922-.018-2.404 1.985-.977.033 4.032a.987.987 0 0 1-.606.907L9.788 16.59a2.024 2.024 0 0 1-1.576 0l-4.606-2.178A.987.987 0 0 1 3 13.505V9.473l2.018.977L5 12.854l4 1.922ZM3.236 6.25 9 9.132l5.764-2.882L9 3.368 3.236 6.25Zm6.211-4.894 8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788l8-4a1 1 0 0 1 .894 0Z"
      />
    </Icon>
  );
}

export default Education;
