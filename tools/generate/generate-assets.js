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
  '../../doc-site/public/downloads',
);

function generateAssets() {
  const assetDirs = glob.sync('*', { cwd: 'src/asset/raw/' });
  // Export key pairs
  const assetsExports = {};

  // Iterate each asset input directory to handle the different types / groupings
  assetDirs.forEach((directory) => {
    // Bundle up the raw svgs for download on the docs site
    generateAssetBundle(directory);

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

function generateAssetBundle(directory) {
  const archive = archiver('zip');

  // Initialise output file for asset bundle and archiver
  const assetOutputBundle = fs.createWriteStream(
    path.join(assetBundleExportPath, `waffles-${directory}-asset-bundle.zip`),
  );
  archive.pipe(assetOutputBundle);
  // Add all of the raw svgs from the directory into a bundle zip,
  archive.directory(path.join(assetsDirPath, 'raw', directory), false);
  // Finalize the archiving
  archive.finalize();
}

function generateBrandBundle() {
  const archive = archiver('zip');
  // Initialise output file for asset bundle and archiver
  const assetOutputBundle = fs.createWriteStream(
    path.join(assetBundleExportPath, 'waffles-brand-bundle.zip'),
  );

  archive.pipe(assetOutputBundle);

  // Bundle up the brand svgs into a zip
  archive.directory(path.join(__dirname, '../../src/brand/raw'), false);

  // Finalize the archiving
  archive.finalize();
}

generateAssets();
generateBrandBundle();
