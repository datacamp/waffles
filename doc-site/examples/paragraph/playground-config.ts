import { Paragraph } from '@datacamp/waffles/paragraph';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Paragraph } from '@datacamp/waffles/paragraph';

function Playground() {
  return (
    <Paragraph variant="primary" size="medium">
      Oracle estimated over 2 million R users worldwide in 2012, cementing R as
      a leading programming language in statistics and data science. Every year,
      the number of R users grows by about 40%, and an increasing number of
      organizations are using it in their day-to-day activities.
    </Paragraph>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Paragraph,
  },
};

export default playgroundConfig;
