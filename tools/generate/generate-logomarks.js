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

const logomarksDirPath = path.resolve(__dirname, '../../src/logomark');
const logomarksExportDirPath = path.resolve(logomarksDirPath, 'generated');
const logomarksExportPath = path.join(logomarksDirPath, 'index.ts');

function generateLogomarks() {
  // Array of SVG logomark filenames
  const svgLogomarks = glob.sync('*.svg', { cwd: 'src/logomark/raw/' });
  // Export key pairs
  const logomarksExports = {};

  svgLogomarks.forEach((svgFilename) => {
    const filename = `${svgFilename.split('.')[0]}-logomark`;
    const componentName = getPascalFormattedName(filename);
    logomarksExports[componentName] = filename;

    // Grab the whole content of SVG file
    const svgLogomark = fs.readFileSync(
      path.join(logomarksDirPath, 'raw', svgFilename),
      { encoding: 'utf-8' },
    );

    // Generate, format and write to file new logomark React components
    fs.writeFileSync(
      path.join(logomarksExportDirPath, `${filename}.tsx`),
      formatContentWithPrettier(
        generateComponentFromSvg(
          componentName,
          getOptimizedSvg(filename, svgLogomark),
          'Logomark',
        ),
      ),
    );
  });

  generateExportIndex(logomarksExportPath, logomarksExports);
}

generateLogomarks();
