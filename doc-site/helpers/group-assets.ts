enum groupNamePairs {
  Alpa = 'ALPA Loop',
  '3d' = '3D',
  Logomark = 'Logomark',
  Logo = 'Logo',
  Other = 'Other',
}

export type AssetModule = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

type GroupedAssets = {
  [value in groupNamePairs]: AssetModule;
};

function groupAssets(assets: AssetModule): GroupedAssets {
  const groups = Object.keys(groupNamePairs);
  return Object.entries(assets).reduce((groupedAssets, entry) => {
    const [name, Asset] = entry;

    // console.log(name);
    // Find the group the asset should fall under, otherwise fall back to 'Other'
    const assignedGroup =
      groups.find((group) => name.endsWith(group)) || 'Other';
    return {
      ...groupedAssets,
      [groupNamePairs[assignedGroup as keyof typeof groupNamePairs]]: {
        ...groupedAssets[
          groupNamePairs[assignedGroup as keyof typeof groupNamePairs]
        ],
        [name]: Asset,
      },
    };
  }, {} as GroupedAssets);
}

export default groupAssets;
