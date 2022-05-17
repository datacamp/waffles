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

const logosDirPath = path.resolve(__dirname, '../../src/logo');
const logosExportDirPath = path.resolve(logosDirPath, 'generated');
const logosExportPath = path.join(logosDirPath, 'index.ts');

function generateLogos() {
  // Array of SVG logos filenames
  const svgLogos = glob.sync('*.svg', { cwd: 'src/logo/raw/' });
  // Export key pairs
  const logosExports = [];

  svgLogos.forEach((svgFilename) => {
    const filename = svgFilename.split('.')[0];
    const componentName = getPascalFormattedName(`${filename}-logo`);
    logosExports[componentName] = filename;

    // Grab the whole content of SVG file
    const svgLogo = fs.readFileSync(
      path.join(logosDirPath, 'raw', svgFilename),
      { encoding: 'utf-8' },
    );

    // Generate, format and write to file new logo React components
    fs.writeFileSync(
      path.join(logosExportDirPath, `${filename}.tsx`),
      formatContentWithPrettier(
        generateComponentFromSvg(
          componentName,
          getOptimizedSvg(filename, svgLogo),
          'Logo',
        ),
      ),
    );
  });

  generateExportIndex(logosExportPath, logosExports);
}

generateLogos();
