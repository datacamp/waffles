import React from 'react';

import Table from './table';

type ComponentStatusTableProps = {
  children: React.ReactNode;
};

function ComponentStatusTable({ children }: ComponentStatusTableProps) {
  return (
    <Table>
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
