import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextArea } from '../../text-area';
import { Input } from '../../input';

const wrapperStyle = css`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Input placeholder="Small input" size="small" />
      <TextArea placeholder="Small text area" rows={1} size="small" />
      <Input placeholder="Medium input" size="medium" />
      <TextArea placeholder="Medium text area" rows={1} size="medium" />
      <Input placeholder="Large input" size="large" />
      <TextArea placeholder="Large text area" rows={1} size="large" />
    </div>
  );
}

export default Story;
