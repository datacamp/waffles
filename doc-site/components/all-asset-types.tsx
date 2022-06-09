import groupAssets from 'helpers/group-assets';
import * as allAssets from '@datacamp/waffles/asset';

import AssetGrid from './asset-grid';

const groupMaxColumnCount = {
  Assignment: 4,
  '3D': 4,
  'ALPA Loop': 2,
  Logomark: 4,
  Logo: 3,
  Other: 4,
};

function AllAssetTypes() {
  const groupedAssets = groupAssets(allAssets);
  return Object.entries(groupedAssets).map(([groupName, assetGroup]) => (
    <AssetGrid
      key={groupName}
      assetType={groupName}
      assets={assetGroup}
      maxColumns={
        groupMaxColumnCount[groupName as keyof typeof groupMaxColumnCount]
      }
    />
  ));
}

export default AllAssetTypes;
