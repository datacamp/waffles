import { css } from '@emotion/react';

import { EmptyState } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Group, Branch, Matrix } from '../../icon';
import { Button } from '../../button';
import { Rocket3d } from '../../asset';

function Story() {
  return (
    <div
      css={css`
        background-color: ${tokens.colors.navy};
      `}
    >
      <EmptyState
        title="Title Heading"
        image={<Rocket3d />}
        inverted
        data-testid="empty-state"
      >
        <Paragraph inverted>Lorem ipsum dolor sit amet.</Paragraph>
        <EmptyState.List>
          <EmptyState.ListItem icon={<Group />}>
            Auctor eu augue
          </EmptyState.ListItem>
          <EmptyState.ListItem icon={<Branch />}>
            Tristique senectus et netus
          </EmptyState.ListItem>
          <EmptyState.ListItem icon={<Matrix />}>
            Mus mauris vitae ultricies
          </EmptyState.ListItem>
        </EmptyState.List>
        <Button>Button</Button>
      </EmptyState>
    </div>
  );
}

export default Story;
