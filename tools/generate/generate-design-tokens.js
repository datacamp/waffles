// Generate new design tokens .ts file based on JSON file with Figma Tokens definitions

// fontWeights, fontFamilies, and boxShadow have non-standard values which are required to work with Figma Tokens plugin
// whole typography and paragraphSpacing are defined for convenience, because Figma doesn't support text components, and are removed
// colors are grouped for convenience, and are flattened

const { formatContentWithPrettier } = require('../helpers/formatting');

const util = require('util');
const path = require('path');
const fs = require('fs');

const tokensDirPath = path.resolve(__dirname, '../../src/tokens');
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

      return [key, { value: regularBoxShadow }];
    }),
  );
}

function transformedFontWeights(baseFontWeights) {
  return Object.fromEntries(
    Object.entries(baseFontWeights).map((entry) => {
      const [key, baseFontWeight] = entry;
      return [key, { value: fontWeightsMap[baseFontWeight.value] }];
    }),
  );
}

function transformedFontFamilies(baseFontFamilies) {
  return Object.fromEntries(
    Object.entries(baseFontFamilies).map((entry) => {
      const [key, baseFontFamily] = entry;
      return [key, { value: fontFamiliesMap[baseFontFamily.value] }];
    }),
  );
}

function transformedPercentages(basePercentages) {
  return Object.fromEntries(
    Object.entries(basePercentages).map((entry) => {
      const [key, basePercantege] = entry;
      // Convert percentages to unitless
      // Useful for line heights and opacity
      const unitless = parseFloat(basePercantege.value) / 100;
      return [key, { value: unitless }];
    }),
  );
}

// Leave only value for each token in each token group, and omit other properties used by Figma Tokens

function extractTokenValues(tokens) {
  // Simplify tokens in each group, leaving only value
  return Object.fromEntries(
    Object.entries(tokens).map(([groupName, groupTokens]) => {
      return [
        groupName,
        Object.fromEntries(
          Object.entries(groupTokens).map(([tokenName, definition]) => {
            return [tokenName, definition.value];
          }),
        ),
      ];
    }),
  );
}

function transformedBaseTokens(tokens) {
  // Remove Figma utility token groups
  delete tokens.typography;
  delete tokens.paragraphSpacing;

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

  return extractTokenValues(transformedTokens);
}

// Write transformed design tokens to file
async function generateDesignTokens() {
  const transformedTokens = util.inspect(transformedBaseTokens(baseTokens), {
    depth: null,
  });
  const content = `// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'generate:design-tokens' to update\n
const tokens = ${transformedTokens} as const\n
export default tokens`;

  fs.writeFileSync(transformedTokensPath, formatContentWithPrettier(content));
}

generateDesignTokens();
