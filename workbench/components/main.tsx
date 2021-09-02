import { css } from '@emotion/react';
import React from 'react';

import GridBackground from './grid-background';

const mainStyle = css`
  background: 50px 50px repeat url(${GridBackground});
  width: 100%;
  min-height: 100vh;
`;

type MainProps = {
  children?: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>;
}

export default Main;
