import groupAssets from 'helpers/group-assets';
import * as allAssets from '@datacamp/waffles/asset';

import AssetGrid from './asset-grid';

function AllAssetTypes() {
  const groupedAssets = groupAssets(allAssets);
  return Object.entries(groupedAssets).map(([groupName, assetGroup]) => (
    <AssetGrid
      key={groupName}
      assetType={groupName === '3d' ? '3D' : groupName}
      assets={assetGroup}
    />
  ));
}

export default AllAssetTypes;
