function formattedModuleExports(
  module: Record<string, unknown> | string[],
  path: string,
): string {
  const moduleExports = Array.isArray(module) ? module : Object.keys(module);
  const numberOfExports = moduleExports.length;

  // Depending on number of exports fit everything into single line or format into multiline code sample
  const formattedExports =
    numberOfExports > 3
      ? `{\n  ${moduleExports.join(',\n  ')},\n}`
      : `{ ${moduleExports.join(', ')} }`;

  return `import ${formattedExports} from '${path}';`;
}

export default formattedModuleExports;
