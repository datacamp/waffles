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
const { generateComponentFromSvg } = require('./helpers/component-from-svg');

const assetsDirPath = path.resolve(__dirname, '../src/asset');
const assetsExportDirPath = path.resolve(assetsDirPath, 'generated');
const assetsExportPath = path.join(assetsDirPath, 'index.ts');

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
          generateComponentFromSvg(
            componentName,
            getOptimizedSvg(filename, svgAsset),
            'Asset',
          ),
        ),
      );
    });
  });

  // Write export statements for all asset components to index.ts file
  fs.writeFileSync(assetsExportPath, `${assetsExports.join('\n')}\n`);
}

generateAssets();
