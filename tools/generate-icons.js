#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');
const { optimize } = require('svgo');

const prettierConfig = prettier.resolveConfig.sync(__dirname);
const iconsDirPath = path.resolve(__dirname, '../src/icon');
const iconsExportDirPath = path.resolve(iconsDirPath, 'output');
const iconsExportPath = path.join(iconsDirPath, 'index.ts');

// Generate pascal case component name based on SVG icon file name
function formattedComponentName(filename) {
  return filename
    .split('-')
    .map((part) => {
      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    })
    .join('');
}

// If the SVG is not marked as colored version (filename doesn't contain 'colored')
// Replace any fill color with 'currentColor'
function svgWithCurrentColorFill(filename, svgIcon) {
  if (!filename.includes('colored')) {
    return svgIcon.replace(/fill="#[^"]+"/g, 'fill="currentColor"');
  }

  return svgIcon;
}

// Optimize SVG icon with svgo
function optimizedSvgIcon(svgIcon) {
  return optimize(svgIcon, {
    multipass: true,
    floatPrecision: 3,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  }).data;
}

// Extracts viewBox from SVG icon
function iconViewBox(svgIcon) {
  return svgIcon.match(/viewBox="([^"]+)"/)[1];
}

// Grab pretty much everything between SVG tags
// Transofrm some attributes to ones compatible with React
function componentInnerContent(svgIcon) {
  return svgIcon
    .replace(/<!--.*-->\n/gm, '')
    .replace(/<\/?svg[^>]*>/gm, '')
    .replace(/^\s*\n/gm, '')
    .replace(/\n$/, '')
    .replace(/\t/g, '  ')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .trim();
}

// Generate React component based on provided SVG content
function componentFromSvg(componentName, svgIcon) {
  return `import Icon from '../icon-internal';

  type ${componentName}Props = Omit<React.ComponentProps<typeof Icon>, 'children'>;

  function ${componentName}({ size, ...restProps }: ${componentName}Props) {
    return <Icon
        viewBox="${iconViewBox(svgIcon)}"
        size={size}
        {...restProps}
      >
        ${componentInnerContent(svgIcon)}
      </Icon>;
  }

  export default ${componentName}`;
}

function generateIcons() {
  // Array of SVG icons file names
  const svgIcons = glob.sync('*.svg', { cwd: 'src/icon/raw/' });

  // Array of export statements
  const iconsExports = [];

  svgIcons.forEach((svgFilename) => {
    const filename = svgFilename.split('.')[0];
    const componentName = formattedComponentName(filename);

    iconsExports.push(
      `export { default as ${componentName} } from './output/${filename}';`,
    );

    // Grab the whole content of SVG file
    const svgIcon = fs.readFileSync(
      path.join(iconsDirPath, 'raw', svgFilename),
      { encoding: 'utf-8' },
    );

    const svgWithUpdatedFillColor = svgWithCurrentColorFill(filename, svgIcon);
    const optimizedSvg = optimizedSvgIcon(svgWithUpdatedFillColor);

    // Generate and format new React component content
    const formattedContent = prettier.format(
      componentFromSvg(componentName, optimizedSvg),
      {
        parser: 'typescript',
        ...prettierConfig,
      },
    );

    fs.writeFileSync(
      path.join(iconsExportDirPath, `${filename}.tsx`),
      formattedContent,
    );
  });

  // Write export statements for all icon components to index.ts file
  fs.writeFileSync(iconsExportPath, `${iconsExports.join('\n')}\n`);
}

generateIcons();
