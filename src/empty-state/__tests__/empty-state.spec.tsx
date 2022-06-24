import { render } from '@testing-library/react';

import { EmptyState } from '../index';
import { Paragraph } from '../../paragraph';
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
        <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
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
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders snapshot in vertical orientation', async () => {
    const { container } = render(
      <EmptyState
        title="Title Heading"
        image={<Rocket3d />}
        orientation="vertical"
      >
        <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
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
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders snapshot in inverted', async () => {
    const { container } = render(
      <EmptyState title="Title Heading" image={<Rocket3d />} inverted>
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
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders snapshot in vertical orientation and inverted', async () => {
    const { container } = render(
      <EmptyState
        title="Title Heading"
        image={<Rocket3d />}
        orientation="vertical"
        inverted
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
      </EmptyState>,
    );

    expect(container).toMatchSnapshot();
  });
});
