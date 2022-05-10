import { Heading } from '@datacamp/waffles/heading';
import { Chapeau } from '@datacamp/waffles/chapeau';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Chapeau } from '@datacamp/waffles/chapeau';
import { Heading } from '@datacamp/waffles/heading';

function Playground() {
  return (
    <header>
      <Chapeau>Certification</Chapeau>
      <Heading size="xxlarge">Get Certified in Data Science</Heading>
    </header>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Chapeau,
    Heading,
  },
};

export default playgroundConfig;
