const { optimize } = require('svgo');

// If the SVG is not marked as colored version (filename doesn't contain 'colored')
// Replace any fill color with 'currentColor'
function getSvgWithCurrentColorFill(filename, svg) {
  if (!filename.includes('colored')) {
    return svg.replace(/fill="#[^"]+"/g, 'fill="currentColor"');
  }

  return svg;
}

// Extracts the viewBox from the SVG
function getSvgViewBox(svg) {
  return svg.match(/viewBox="([^"]+)"/)[1];
}

// Return the width and height from a viewBox string
function getViewBoxDimensions(viewBox) {
  const viewBoxVals = viewBox.split(' ');
  return {
    width: viewBoxVals[2],
    height: viewBoxVals[3],
  };
}

// Grab pretty much everything between the SVG tags
// Transform some attributes to ones compatible with React
function getSvgInnerContent(svg) {
  return svg
    .replace(/<!--.*-->\n/gm, '')
    .replace(/<\/?svg[^>]*>/gm, '')
    .replace(/^\s*\n/gm, '')
    .replace(/\n$/, '')
    .replace(/\t/g, '  ')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/stroke-width/g, 'strokeWidth')
    .trim();
}

// Optimize the SVG with svgo
function optimizeSvg(svg) {
  return optimize(svg, {
    multipass: true,
    floatPrecision: 3,
    plugins: [
      {
        name: 'inlineStyles',
        params: {
          onlyMatchedOnce: false,
        },
      },
      'convertStyleToAttrs',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  }).data;
}

// Retrieve optimised svg with the correct the color fill
function getOptimizedSvg(filename, svg) {
  return optimizeSvg(getSvgWithCurrentColorFill(filename, svg));
}

module.exports = {
  getOptimizedSvg,
  getSvgInnerContent,
  getSvgViewBox,
  getViewBoxDimensions,
};
