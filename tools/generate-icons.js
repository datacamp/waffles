#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');

const prettierConfig = prettier.resolveConfig.sync(__dirname);
const iconsDirPath = path.resolve(__dirname, '../src/icon');
const iconsExportPath = path.join(iconsDirPath, 'index.ts');

// Generate pascal case component name based on raw icon file name
function formattedComponentName(filename) {
  return filename
    .split('-')
    .map((part) => {
      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    })
    .join('');
}

// Extracts viewBox from raw icon
function iconViewBox(rawIconContent) {
  return rawIconContent.match(/viewBox="([^"]+)"/)[1];
}

// Grab pretty much everything between SVG tags
// Transofrm some attributes to ones compatible with React
function rawIconInnerContent(rawIconContent) {
  return rawIconContent
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
function componentContent(componentName, rawIconContent) {
  return `function ${componentName}() { return <svg
    viewBox="${iconViewBox(rawIconContent)}"
    width="18"
    height="18">
    ${rawIconInnerContent(rawIconContent)}</svg> }\n
    export default ${componentName}`;
}

function generateIcons() {
  // Array of SVG icons file names
  const rawIcons = glob.sync('*.svg', { cwd: 'src/icon/raw/' });

  // Array of export statements
  const iconsExports = [];

  rawIcons.forEach((rawIconFilename) => {
    const filename = rawIconFilename.split('.')[0];
    const componentName = formattedComponentName(filename);

    iconsExports.push(
      `export { default as ${componentName} } from './${filename}';`,
    );

    // Grab the whole content of SVG file
    const rawIconContent = fs.readFileSync(
      path.join(iconsDirPath, 'raw', rawIconFilename),
      { encoding: 'utf-8' },
    );

    // Generate and format new React component content
    const formattedContent = prettier.format(
      componentContent(componentName, rawIconContent),
      {
        parser: 'typescript',
        ...prettierConfig,
      },
    );

    fs.writeFileSync(
      path.join(iconsDirPath, `${filename}.tsx`),
      formattedContent,
    );
  });

  // Write export statements for all icon components to index.ts file
  fs.writeFileSync(iconsExportPath, iconsExports.join('\n'));
}

generateIcons();
