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

const assetsDirPath = path.resolve(__dirname, '../src/asset');
const assetsExportDirPath = path.resolve(assetsDirPath, 'generated');
const assetsExportPath = path.join(assetsDirPath, 'index.ts');

// Generate a React component based on the provided SVG content
function componentFromSvg(componentName, svgContent) {
  return `// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'yarn generate:assets' to update

  import Asset from '../asset-internal';

  type ${componentName}Props = Omit<React.ComponentProps<typeof Asset>, 'children'>;

  function ${componentName}({ ...restProps }: ${componentName}Props) {
    return <Asset
        viewBox="${getSvgViewBox(svgContent)}"
        {...restProps}
      >
        ${getSvgInnerContent(svgContent)}
      </Asset>;
  }

  export default ${componentName}`;
}

function generateAssets() {
  const assetDirs = glob.sync('*', { cwd: 'src/asset/raw/' });
  // Array of export statements
  const assetsExports = [];

  // Iterate each asset input directory to handle the different type prefixes
  assetDirs.forEach((directory) => {
    // Array of SVG asset filenames
    const svgAssets = glob.sync('*.svg', { cwd: `src/asset/raw/${directory}` });
    svgAssets.forEach((svgFilename) => {
      // Add asset type suffix to component name if it has one
      const filename = svgFilename
        .split('.')[0]
        .concat(directory !== 'other' ? `-${directory}` : '');
      const componentName = getPascalFormattedName(filename);

      assetsExports.push(
        `export { default as ${componentName} } from './generated/${filename}';`,
      );

      // Grab the whole content of SVG file
      const svgAsset = fs.readFileSync(
        path.join(assetsDirPath, 'raw', directory, svgFilename),
        { encoding: 'utf-8' },
      );

      // Generate, format and write to file new asset React components
      fs.writeFileSync(
        path.join(assetsExportDirPath, `${filename}.tsx`),
        formatContentWithPrettier(
          componentFromSvg(componentName, getOptimizedSvg(filename, svgAsset)),
        ),
      );
    });
  });

  // Write export statements for all asset components to index.ts file
  fs.writeFileSync(assetsExportPath, `${assetsExports.join('\n')}\n`);
}

generateAssets();
