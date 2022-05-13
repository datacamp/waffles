type AssetModule = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

type GroupedAssets = {
  '3D': AssetModule;
  Other: AssetModule;
};

function groupAssets(assets: AssetModule): GroupedAssets {
  return Object.entries(assets).reduce((groupedAssets, entry) => {
    const [name, Asset] = entry;
    const group = name.endsWith('3D') ? '3D' : 'Other';
    return {
      ...groupedAssets,
      [group]: {
        ...groupedAssets[group],
        [name]: Asset,
      },
    };
  }, {} as GroupedAssets);
}

export default groupAssets;
