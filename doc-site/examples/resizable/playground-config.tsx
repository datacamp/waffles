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
        borderRadius: '4px',
        backgroundColor: '#F7F3EB',
      }}
    >
      <Resizable initialProportions={[60, 40]} showSeparators>
        <Paragraph style={{ padding: '16px' }}>
          First Resizable Subsection
        </Paragraph>
        <Paragraph style={{ padding: '16px' }}>
          Second Resizable Subsection
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
  },
};

export default playgroundConfig;
