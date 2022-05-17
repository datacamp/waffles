type AssetModule = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

const groups = ['3d', 'Logomark', 'Logo'];

type GroupedAssets = {
  '3D': AssetModule;
  Logomark: AssetModule;
  Logo: AssetModule;
  Other: AssetModule;
};

function groupAssets(assets: AssetModule): GroupedAssets {
  return Object.entries(assets).reduce((groupedAssets, entry) => {
    const [name, Asset] = entry;
    // Find the group the asset should fall under, otherwise fall back to 'Other'
    const assignedGroup =
      groups.find((group) => name.endsWith(group)) || 'Other';
    return {
      ...groupedAssets,
      [assignedGroup]: {
        ...groupedAssets[assignedGroup as keyof GroupedAssets],
        [name]: Asset,
      },
    };
  }, {} as GroupedAssets);
}

export default groupAssets;
