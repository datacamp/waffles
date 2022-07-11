import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';

import Table from './table';

const tableStyle = css`
  td {
    padding: ${tokens.spacing.small};
  }
`;

type ComponentStatusTableProps = {
  children: React.ReactNode;
};

function ComponentStatusTable({ children }: ComponentStatusTableProps) {
  return (
    <Table css={tableStyle}>
      <thead>
        <tr>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>React</Table.HeadCell>
          <Table.HeadCell>Figma</Table.HeadCell>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}

export default ComponentStatusTable;
