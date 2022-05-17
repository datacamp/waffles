const { getSvgInnerContent, getSvgViewBox } = require('./svg-generation');

// TODO: Handle comamnd name from type / import?

// Generate a React component based on the provided SVG content
function generateComponentFromSvg(
  componentName,
  svgContent,
  componentType,
  componentProps = [],
) {
  const functionProps = [...componentProps, '...restProps'].join(',');
  return `// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'yarn generate:${componentType.toLowerCase()}s' to update

  import ${componentType} from '../${componentType.toLowerCase()}-internal';

  type ${componentName}Props = Omit<React.ComponentProps<typeof ${componentType}>, 'children'>;

  function ${componentName}({${functionProps}}: ${componentName}Props) {
    return <${componentType}
        viewBox="${getSvgViewBox(svgContent)}"
        ${componentProps.map((prop) => {
          return `${prop}={${prop}}`;
        })}
        {...restProps}
      >
        ${getSvgInnerContent(svgContent)}
      </${componentType}>;
  }

  export default ${componentName}`;
}

module.exports = { generateComponentFromSvg };
