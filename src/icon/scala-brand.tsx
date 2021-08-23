import Icon from './icon-base';

type ScalaBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ScalaBrand({ size, ...restProps }: ScalaBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M13.969237,10.632316 L13.969048,14.6235113 C13.9621478,14.7081536 13.7033907,16.3081349 4,17.278474 L4,13.2907792 C4,13.2907792 13.969237,12.2938555 13.969237,10.632316 Z M13.969237,5.316158 L13.969048,9.30735331 C13.9621478,9.39199562 13.7033907,10.9919769 4,11.962316 L4,7.9746212 C4,7.9746212 13.969237,6.9776975 13.969237,5.316158 Z M13.969237,0 L13.969048,3.99119531 C13.9621478,4.07583762 13.7033907,5.67581893 4,6.646158 L4,2.6584632 C4,2.6584632 13.969237,1.6615395 13.969237,0 Z"
      />
    </Icon>
  );
}

export default ScalaBrand;
