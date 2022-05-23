#!/usr/bin/env node

const glob = require('glob');
const archiver = require('archiver');

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

const assetBundleExportPath = path.join(
  __dirname,
  '../../doc-site/public/waffles-asset-bundle.zip',
);

function generateAssetBundle() {
  // Initialise output file for asset bundle and archiver
  const assetOutputBundle = fs.createWriteStream(assetBundleExportPath);
  const archive = archiver('zip');
  archive.pipe(assetOutputBundle);
  // Add all of the icons from the directory into the bundle zip, under group directory
  archive.directory(path.join(assetsDirPath, 'raw'), false);

  // Add the datacamp brand assets to the archive too
  archive.directory(
    path.join(__dirname, '../../src/brand/raw'),
    'datacamp-brand',
  );
  // Finalize the archiving
  archive.finalize();
}

function generateAssets() {
  const assetDirs = glob.sync('*', { cwd: 'src/asset/raw/' });
  // Export key pairs
  const assetsExports = {};

  // Iterate each asset input directory to handle the different types / groupings
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
generateAssetBundle();
