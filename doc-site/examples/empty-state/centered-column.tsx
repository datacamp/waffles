import { Paragraph } from '@datacamp/waffles/paragraph';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Paper3d } from '@datacamp/waffles/asset';

function Example() {
  return (
    <EmptyState
      title="You have no assignments yet"
      image={<Paper3d />}
      orientation="vertical"
      isCentered
    >
      <Paragraph>
        Reach out to your admin to get relevant content assigned to you.
      </Paragraph>
      <Button>Contact admin</Button>
    </EmptyState>
  );
}

export default Example;
