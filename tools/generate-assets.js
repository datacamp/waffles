#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const {
  getPascalFormattedName,
  formatContentWithPrettier,
} = require('./helpers/formatting');
const {
  getOptimizedSVG,
  getSVGInnerContent,
  getSVGViewBox,
} = require('./helpers/svg');

const assetsDirPath = path.resolve(__dirname, '../src/asset');
const assetsExportDirPath = path.resolve(assetsDirPath, 'output');
const assetsExportPath = path.join(assetsDirPath, 'index.ts');

// TODO: Get width/height from asset
// TODO: Should 'misc' be it's own folder or just have them non-nested under 'raw'

// Generate a React component based on the provided SVG content
function componentFromSVG(componentName, svgContent) {
  return `// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'yarn generate:assets' to update

  import Asset from '../asset-internal';

  type ${componentName}Props = Omit<React.ComponentProps<typeof Asset>, 'children'>;

  function ${componentName}({ width, height, ...restProps }: ${componentName}Props) {
    return <Asset
        viewBox="${getSVGViewBox(svgContent)}"
        {...restProps}
      >
        ${getSVGInnerContent(svgContent)}
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
      const filename = svgFilename.split('.')[0];
      // Add asset type suffix to component name if it has one
      const componentName = getPascalFormattedName(
        directory === 'misc' ? filename : `${filename}-${directory}`,
      );

      assetsExports.push(
        `export { default as ${componentName} } from './output/${filename}';`,
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
          componentFromSVG(componentName, getOptimizedSVG(filename, svgAsset)),
        ),
      );
    });
  });

  // Write export statements for all asset components to index.ts file
  fs.writeFileSync(assetsExportPath, `${assetsExports.join('\n')}\n`);
}

generateAssets();
