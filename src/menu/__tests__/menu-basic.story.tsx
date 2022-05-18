import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Code, Edit, Copy, Visible, ExternalLink } from '../../icon';
import { Button } from '../../button';
import { Menu } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Menu trigger={<Button variant="secondary">Open Menu</Button>}>
        <Menu.Category noDivider>
          <Menu.Item label="Edit" iconLeft={<Code />} />
          <Menu.Item label="Rename" iconLeft={<Edit />} />
          <Menu.Item label="Duplicate" iconLeft={<Copy />} />
        </Menu.Category>
        <Menu.Category>
          <Menu.Item
            as="a"
            href="https://app.datacamp.com/publications"
            label="View Publication"
            iconLeft={<Visible />}
            iconRight={<ExternalLink />}
          />
        </Menu.Category>
      </Menu>
    </div>
  );
}

export default Story;
