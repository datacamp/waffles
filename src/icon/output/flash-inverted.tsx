import Icon from '../icon-internal';

type FlashInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function FlashInverted({ size, ...restProps }: FlashInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M15.378 5.957a.545.545 0 0 0-.485-.273H9.867L12.69.686a.426.426 0 0 0-.022-.46.555.555 0 0 0-.453-.226H7.929a.545.545 0 0 0-.484.271L2.623 9.27a.426.426 0 0 0 .031.456c.098.137.269.22.453.22h4.399l-3.82 7.398c-.102.216-.009.466.218.588.227.121.52.077.689-.103L15.305 6.461a.432.432 0 0 0 .073-.504z"
      />
    </Icon>
  );
}

export default FlashInverted;
