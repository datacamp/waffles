#!/usr/bin/env node

const glob = require('glob');

const { getOptimizedSvg } = require('../helpers/svg-generation');
const {
  getPascalFormattedName,
  formatContentWithPrettier,
} = require('../helpers/formatting');
const {
  generateComponentFromSvg,
  generateExportIndex,
} = require('../helpers/component-generation');

const path = require('path');
const fs = require('fs');

const assetsDirPath = path.resolve(__dirname, '../../src/asset');
const assetsExportDirPath = path.resolve(assetsDirPath, 'generated');
const assetsExportPath = path.join(assetsDirPath, 'index.ts');

function generateAssets() {
  const assetDirs = glob.sync('*', { cwd: 'src/asset/raw/' });
  // Export key pairs
  const assetsExports = {};

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
      assetsExports[componentName] = filename;

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

  generateExportIndex(assetsExportPath, assetsExports);
}

generateAssets();
