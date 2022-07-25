import { tokens } from '@datacamp/waffles/tokens';
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Playground() {
  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        borderRadius: tokens.borderRadius.medium,
        backgroundColor: tokens.colors.beigeLight,
      }}
    >
      <Resizable initialProportions={[60, 40]} showDividers>
        <Paragraph style={{ padding: tokens.spacing.medium }}>
          First Panel
        </Paragraph>
        <Paragraph style={{ padding: tokens.spacing.medium }}>
          Second Panel
        </Paragraph>
      </Resizable>
    </div>
  );
}

export default Playground;
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Resizable,
    Paragraph,
    tokens,
  },
};

export default playgroundConfig;
