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

const iconsDirPath = path.resolve(__dirname, '../../src/icon');
const iconsExportDirPath = path.resolve(iconsDirPath, 'generated');
const iconsExportPath = path.join(iconsDirPath, 'index.ts');

function generateIcons() {
  const assetDirs = glob.sync('*', { cwd: 'src/icon/raw/' });
  // Export key pairs
  const iconsExports = {};

  // Iterate each icon input directory to handle the different type prefixes
  assetDirs.forEach((directory) => {
    // Array of SVG icons filenames
    const svgIcons = glob.sync('*.svg', { cwd: `src/icon/raw/${directory}` });

    svgIcons.forEach((svgFilename) => {
      const filename = svgFilename.split('.')[0];
      const componentName = getPascalFormattedName(filename);
      iconsExports[componentName] = filename;

      // Grab the whole content of SVG file
      const svgIcon = fs.readFileSync(
        path.join(iconsDirPath, 'raw', directory, svgFilename),
        { encoding: 'utf-8' },
      );

      // Generate, format and write to file new icon React components
      fs.writeFileSync(
        path.join(iconsExportDirPath, `${filename}.tsx`),
        formatContentWithPrettier(
          generateComponentFromSvg(
            componentName,
            getOptimizedSvg(filename, svgIcon),
            'Icon',
            ['size'],
          ),
        ),
      );
    });
  });

  generateExportIndex(iconsExportPath, iconsExports);
}

generateIcons();
