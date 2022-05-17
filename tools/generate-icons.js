#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const {
  getPascalFormattedName,
  formatContentWithPrettier,
} = require('./helpers/formatting');
const {
  getOptimizedSvg,
  getSvgInnerContent,
  getSvgViewBox,
} = require('./helpers/svg-generation');

const iconsDirPath = path.resolve(__dirname, '../src/icon');
const iconsExportDirPath = path.resolve(iconsDirPath, 'generated');
const iconsExportPath = path.join(iconsDirPath, 'index.ts');

// Generate a React component based on the provided SVG content
function componentFromSvg(componentName, svgContent) {
  return `// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'yarn generate:icons' to update

  import Icon from '../icon-internal';

  type ${componentName}Props = Omit<React.ComponentProps<typeof Icon>, 'children'>;

  function ${componentName}({ size, ...restProps }: ${componentName}Props) {
    return <Icon
        viewBox="${getSvgViewBox(svgContent)}"
        size={size}
        {...restProps}
      >
        ${getSvgInnerContent(svgContent)}
      </Icon>;
  }

  export default ${componentName}`;
}

function generateIcons() {
  // Array of SVG icons filenames
  const svgIcons = glob.sync('*.svg', { cwd: 'src/icon/raw/' });
  // Array of export statements
  const iconsExports = [];

  svgIcons.forEach((svgFilename) => {
    const filename = svgFilename.split('.')[0];
    const componentName = getPascalFormattedName(filename);

    iconsExports.push(
      `export { default as ${componentName} } from './generated/${filename}';`,
    );

    // Grab the whole content of SVG file
    const svgIcon = fs.readFileSync(
      path.join(iconsDirPath, 'raw', svgFilename),
      { encoding: 'utf-8' },
    );

    // Generate, format and write to file new icon React components
    fs.writeFileSync(
      path.join(iconsExportDirPath, `${filename}.tsx`),
      formatContentWithPrettier(
        componentFromSvg(componentName, getOptimizedSvg(filename, svgIcon)),
      ),
    );
  });

  // Write export statements for all icon components to index.ts file
  fs.writeFileSync(iconsExportPath, `${iconsExports.join('\n')}\n`);
}

generateIcons();
