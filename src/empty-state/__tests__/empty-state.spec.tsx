import { render } from '@testing-library/react';

import { EmptyState } from '../index';
import { Group, Matrix, Branch } from '../../icon';
import { Button } from '../../button';
import { Rocket3d } from '../../asset';

jest.mock('../../icon', () => {
  return {
    Group: () => 'Group',
    Branch: () => 'Branch',
    Matrix: () => 'Matrix',
  };
});

jest.mock('../../asset', () => {
  return {
    Rocket3d: () => 'Rocket3d',
  };
});

describe('Dialog', () => {
  it('renders snapshot', async () => {
    const { container } = render(
      <EmptyState title="Title Heading" image={<Rocket3d />}>
        <EmptyState.Content>Lorem ipsum dolor sit amet.</EmptyState.Content>
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
        <EmptyState.Content>
          <Button>Button</Button>
        </EmptyState.Content>
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders snapshot in column direction', async () => {
    const { container } = render(
      <EmptyState title="Title Heading" image={<Rocket3d />} direction="column">
        <EmptyState.Content>Lorem ipsum dolor sit amet.</EmptyState.Content>
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
        <EmptyState.Content>
          <Button>Button</Button>
        </EmptyState.Content>
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders snapshot in inverted', async () => {
    const { container } = render(
      <EmptyState title="Title Heading" image={<Rocket3d />} inverted>
        <EmptyState.Content>Lorem ipsum dolor sit amet.</EmptyState.Content>
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
        <EmptyState.Content>
          <Button>Button</Button>
        </EmptyState.Content>
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders snapshot in column direction and inverted', async () => {
    const { container } = render(
      <EmptyState
        title="Title Heading"
        image={<Rocket3d />}
        direction="column"
        inverted
      >
        <EmptyState.Content>Lorem ipsum dolor sit amet.</EmptyState.Content>
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
        <EmptyState.Content>
          <Button>Button</Button>
        </EmptyState.Content>
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });
});
