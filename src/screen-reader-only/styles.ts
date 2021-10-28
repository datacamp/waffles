import { css } from '@emotion/react';

export function screenReaderOnlyStyle() {
  return css`
    position: absolute;
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
  `;
}
