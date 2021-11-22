import { ScreenReaderOnly } from '@datacamp/waffles/screen-reader-only';
import { Paragraph } from '@datacamp/waffles/paragraph';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { ScreenReaderOnly } from '@datacamp/waffles/screen-reader-only';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Playground() {
  return (
    <Paragraph>
      This text is perfectly visible.{' '}
      <ScreenReaderOnly>
        But this part is visually hidden, and available only for sceen readers.
      </ScreenReaderOnly>
    </Paragraph>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    ScreenReaderOnly,
    Paragraph,
  },
};

export default playgroundConfig;
