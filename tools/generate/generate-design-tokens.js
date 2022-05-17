// Generate new design tokens .ts file based on JSON file with Figma Tokens definitions

// fontWeights, fontFamilies, and boxShadow have non-standard values which are required to work with Figma Tokens plugin
// whole typography and paragraphSpacing are defined for convenience, because Figma doesn't support text components, and are removed
// colors are grouped for convenience, and are flattened

const { formatContentWithPrettier } = require('../helpers/formatting');

const util = require('util');
const path = require('path');
const fs = require('fs');

const tokensDirPath = path.resolve(__dirname, '../src/tokens');
const baseTokensPath = path.join(tokensDirPath, 'tokens.json');
const transformedTokensPath = path.join(tokensDirPath, 'tokens.ts');

const baseTokens = require(baseTokensPath); // Already parsed to JS

// Mappings from Figma Tokens values to valid CSS couterparts

const fontWeightsMap = {
  Bold: 800,
  Regular: 400,
};

const fontFamiliesMap = {
  'JetBrains Mono NL':
    "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
  'Studio Feixen Sans': 'Studio-Feixen-Sans, Arial, sans-serif',
};

// Transformations for colors, boxShadow, fontWeights, fontFamilies, lineHeights, and opacity

function transformedColors(baseColors) {
  return Object.entries(baseColors).reduce((flattenedColors, currentEntry) => {
    const groupedColors = currentEntry[1];
    return Object.assign(flattenedColors, { ...groupedColors });
  }, {});
}

function transformedBoxShadows(baseBoxShadows) {
  return Object.fromEntries(
    Object.entries(baseBoxShadows).map((entry) => {
      const [key, baseBoxShadow] = entry;
      const { blur, color, spread, x, y } = baseBoxShadow.value;
      // Regular CSS box-shadow value
      const regularBoxShadow = `${x} ${y} ${blur} ${spread} ${color}`;

      return [key, regularBoxShadow];
    }),
  );
}

function transformedFontWeights(baseFontWeights) {
  return Object.fromEntries(
    Object.entries(baseFontWeights).map((entry) => {
      const [key, baseFontWeight] = entry;
      return [key, fontWeightsMap[baseFontWeight]];
    }),
  );
}

function transformedFontFamilies(baseFontFamilies) {
  return Object.fromEntries(
    Object.entries(baseFontFamilies).map((entry) => {
      const [key, baseFontFamily] = entry;
      return [key, fontFamiliesMap[baseFontFamily]];
    }),
  );
}

function transformedPercentages(basePercentages) {
  return Object.fromEntries(
    Object.entries(basePercentages).map((entry) => {
      const [key, basePercantege] = entry;
      // Convert percentages to unitless
      // Useful for line heights and opacity
      const unitless = parseFloat(basePercantege) / 100;
      return [key, unitless];
    }),
  );
}

// Apply trasformations and remove typography and paragraphSpacing sections
function transformedBaseTokens(tokens) {
  const transformedTokens = {
    ...tokens,
    boxShadow: {
      ...transformedBoxShadows(tokens.boxShadow),
    },
    colors: {
      ...transformedColors(tokens.colors),
    },
    fontFamilies: {
      ...transformedFontFamilies(tokens.fontFamilies),
    },
    fontWeights: {
      ...transformedFontWeights(tokens.fontWeights),
    },
    lineHeights: {
      ...transformedPercentages(tokens.lineHeights),
    },
    opacity: {
      ...transformedPercentages(tokens.opacity),
    },
  };

  delete transformedTokens.typography;
  delete transformedTokens.paragraphSpacing;

  return transformedTokens;
}

// Write transformed design tokens to file
async function generateDesignTokens() {
  const transformedTokens = util.inspect(transformedBaseTokens(baseTokens), {
    depth: null,
  });
  const content = `const tokens = ${transformedTokens} as const\n\nexport default tokens`;

  fs.writeFileSync(transformedTokensPath, formatContentWithPrettier(content));
}

generateDesignTokens();
