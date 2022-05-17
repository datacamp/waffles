#!/usr/bin/env node

const glob = require('glob');

const { getOptimizedSvg } = require('../helpers/svg-generation');
const {
  getPascalFormattedName,
  formatContentWithPrettier,
} = require('../helpers/formatting');
const { generateComponentFromSvg } = require('../helpers/component-from-svg');

const path = require('path');
const fs = require('fs');

// TODO: Handle datacamp logo / logomark generation as part of this script?
//      - Maybe separate it out into own script / tool
function generateDataCampLogosLogomarks() {}

function generateLogos() {
  const logosDirPath = path.resolve(__dirname, '../../src/logo');
  const logosExportDirPath = path.resolve(logosDirPath, 'output');
  const logosExportPath = path.join(logosDirPath, 'index.ts');

  // Array of SVG logos filenames
  const svgLogos = glob.sync('*.svg', { cwd: 'src/logo/raw/' });
  // Array of export statements
  const logosExports = [];

  svgLogos.forEach((svgFilename) => {
    const filename = svgFilename.split('.')[0];
    const componentName = getPascalFormattedName(`${filename}-logo`);

    logosExports.push(
      `export { default as ${componentName} } from './output/${filename}';`,
    );

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
          'logos-logomarks',
        ),
      ),
    );
  });

  // Write export statements for all logo components to index.ts file
  fs.writeFileSync(logosExportPath, `${logosExports.join('\n')}\n`);
}

// TOOD: Handle generic logomarks?
function generateLogomarks() {
  const logomarksDirPath = path.resolve(__dirname, '../../src/logomark');
  const logomarksExportDirPath = path.resolve(logomarksDirPath, 'output');
  const logomarksExportPath = path.join(logomarksDirPath, 'index.ts');

  // Array of SVG logomark filenames
  const svgLogomarks = glob.sync('*.svg', { cwd: 'src/logomark/raw/' });
  // Array of export statements
  const logomarksExports = [];

  svgLogomarks.forEach((svgFilename) => {
    const filename = svgFilename.split('.')[0];
    const componentName = getPascalFormattedName(`${filename}-logomark`);

    logomarksExports.push(
      `export { default as ${componentName} } from './output/${filename}';`,
    );

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
          'logos-logomarks',
        ),
      ),
    );
  });

  // Write export statements for all logomark components to index.ts file
  fs.writeFileSync(logomarksExportPath, `${logomarksExports.join('\n')}\n`);
}

generateLogos();
generateLogomarks();
