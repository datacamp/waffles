#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettier = require('prettier');

const prettierConfig = prettier.resolveConfig.sync(__dirname);

// Return full path to main component e.g. src/button, based on provided path to story
function componentDirectoryName(storyPath) {
  return storyPath.match(/^src\/([\w-]+)\//)[1];
}

// Return updated file name based on provided path to story
function newFileName(storyPath) {
  return `${storyPath.match(/([\w-]+)\.story.tsx$/)[1]}.tsx`;
}

// Return updated paths to import prebuilt modules
// Add import to Main wrapper
// Update if more complex imports would be added to stories
function contentWithUpdatedImports(storyContent, componentDirectoryName) {
  return storyContent.replace(
    '../index',
    `@datacamp/waffles/${componentDirectoryName}';\nimport Main from '../../components/main`,
  );
}

// Wrap story component(s) with Main
function contentWrappedWithMain(storyContent) {
  const mainContent = storyContent.match(/return ([^;]*)/)[1];
  const noFragmentOrParenthesis = mainContent.replace(/<>|<\/>|^\(|\)$/g, '');

  const wrappedWithMain = storyContent.replace(
    /return ([^;]*)/,
    `return (<Main>${noFragmentOrParenthesis}</Main>)`,
  );

  return wrappedWithMain;
}

// Copy and enchance all stories found within src to workbench/pages/stories to run cypress tests agains them
function prepareWorkbenchStories() {
  const workbenchStoriesPath = path.resolve(
    __dirname,
    '../workbench/pages/stories',
  );

  if (!fs.existsSync(workbenchStoriesPath)) {
    fs.mkdirSync(workbenchStoriesPath, { recursive: true });
  }

  const storiesPaths = glob.sync('src/**/*.story.tsx');

  storiesPaths.forEach((storyPath) => {
    const componentDir = componentDirectoryName(storyPath);
    const fileName = newFileName(storyPath);

    const storyContent = fs.readFileSync(storyPath).toString();

    const updatedImports = contentWithUpdatedImports(
      storyContent,
      componentDir,
    );
    const wrapWithMain = contentWrappedWithMain(updatedImports);
    const formattedContent = prettier.format(wrapWithMain, {
      parser: 'typescript',
      ...prettierConfig,
    });

    fs.writeFileSync(
      path.join(workbenchStoriesPath, fileName),
      formattedContent,
    );
  });
}

prepareWorkbenchStories();
