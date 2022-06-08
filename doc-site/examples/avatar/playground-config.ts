import { DataCampBrand } from '@datacamp/waffles/icon';
import { Avatar } from '@datacamp/waffles/avatar';
import { GitLogomark } from '@datacamp/waffles/asset';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { DataCampBrand } from '@datacamp/waffles/icon';
import { Avatar } from '@datacamp/waffles/avatar';
import { GitLogomark } from '@datacamp/waffles/asset';

function Playground() {
  return (
    <Avatar variant="green" size="medium" content="D" />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Avatar,
    DataCampBrand,
    GitLogomark,
  },
};

export default playgroundConfig;
