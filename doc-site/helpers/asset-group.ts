import * as allAssets from '@datacamp/waffles/asset';

// Group names based on the suffix for Asset components
const assetGroupNames = ['3d', 'Alpa', 'Assignment', 'Logo', 'Logomark'];

type AssetGroup = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

function getAssetGroup(assetType: string): AssetGroup {
  // Find all assets that are of the provided type (or, don't match any type if it's 'Other')
  return Object.entries(allAssets).reduce((assetGroup, entry) => {
    const [name, Asset] = entry;

    return {
      ...assetGroup,
      ...(((assetType == 'Other' &&
        assetGroupNames.every((groupName) => !name.endsWith(groupName))) ||
        name.endsWith(assetType)) && { [name]: Asset }),
    };
  }, {} as AssetGroup);
}

export default getAssetGroup;
