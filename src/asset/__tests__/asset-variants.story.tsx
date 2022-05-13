import { css } from '@emotion/react';

import * as assets from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      {Object.entries(assets).map((assetEntry) => {
        const [name, Asset] = assetEntry;
        return (
          <div key={name} data-testid="asset-row">
            <Asset />
          </div>
        );
      })}
    </div>
  );
}

export default Story;
