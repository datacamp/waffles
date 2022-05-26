import { css } from '@emotion/react';
import { DataCampLogo } from '@datacamp/waffles/brand';

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
