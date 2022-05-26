import { DataCampLogo } from '@datacamp/waffles/brand';
import { css } from '@emotion/react';

function Example() {
  return (
    <div
      css={css`
        width: 250px;
      `}
    >
      <DataCampLogo />
    </div>
  );
}

export default Example;
