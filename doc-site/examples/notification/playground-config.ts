import { Notification } from '@datacamp/waffles/notification';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Notification } from '@datacamp/waffles/notification';

function Playground() {
  return (
    <Notification
      title="Short Notification Title"
      description="Keep the title and description as short as possible."
      variant="default"
      closable
    />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Notification,
  },
};

export default playgroundConfig;
