const { optimize } = require('svgo');

// If the SVG is not marked as colored version (filename doesn't contain 'colored')
// Replace any fill color with 'currentColor'
function svgWithCurrentColorFill(filename, svg) {
  if (!filename.includes('colored')) {
    return svg.replace(/fill="#[^"]+"/g, 'fill="currentColor"');
  }

  return svg;
}

// Extracts viewBox from the SVG
function getSVGViewBox(svg) {
  return svg.match(/viewBox="([^"]+)"/)[1];
}

// Grab pretty much everything between the SVG tags
// Transform some attributes to ones compatible with React
function getSVGInnerContent(svg) {
  return (
    svg
      .replace(/<!--.*-->\n/gm, '')
      .replace(/<\/?svg[^>]*>/gm, '')
      .replace(/^\s*\n/gm, '')
      .replace(/\n$/, '')
      .replace(/\t/g, '  ')
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule')
      .replace(/fill-opacity/g, 'fillOpacity')
      // .replace(/class/g, 'className')
      .trim()
  );
}

// Optimize the SVG with svgo
function optimizeSVG(svg) {
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

// Retrieve
function getOptimizedSVG(filename, svg) {
  return optimizeSVG(svgWithCurrentColorFill(filename, svg));
}

module.exports = { getOptimizedSVG, getSVGInnerContent, getSVGViewBox };
