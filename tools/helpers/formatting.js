const prettier = require('prettier');

const prettierConfig = prettier.resolveConfig.sync(__dirname);

// Generate pascal case component name based on SVG icon file name
function getPascalFormattedName(filename) {
  return filename
    .split('-')
    .map((part) => {
      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    })
    .join('');
}

// Format the provided string contents with prettier
function formatContentWithPrettier(contents) {
  return prettier.format(contents, {
    parser: 'typescript',
    ...prettierConfig,
  });
}

module.exports = { getPascalFormattedName, formatContentWithPrettier };
