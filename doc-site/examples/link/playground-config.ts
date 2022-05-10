import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';
import { ExternalLink } from '@datacamp/waffles/icon';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Link } from '@datacamp/waffles/link';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { ExternalLink } from '@datacamp/waffles/icon';

function Playground() {
  return (
    <Paragraph variant="primary" size="medium">
      Through hands-on exercises, with{' '}
      <Link href="https://www.datacamp.com/">DataCamp</Link> you’ll learn how to
      understand data, whether it’s a bar plot on the news or as a statistic
      shared during a work meeting.
    </Paragraph>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Link,
    Paragraph,
    ExternalLink,
  },
};

export default playgroundConfig;
