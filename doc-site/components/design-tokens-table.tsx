import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import DesignTokenExample from './design-token-example';
import Table from './table';

const nameStyle = css`
  width: 40%;
`;

type DesignTokensTableProps = {
  tokensGroup: keyof typeof tokens;
};

function DesignTokensTable({ tokensGroup }: DesignTokensTableProps) {
  return (
    <Table>
      <thead>
        <tr>
          <Table.HeadCell css={nameStyle}>Name</Table.HeadCell>
          <Table.HeadCell>Value</Table.HeadCell>
          <Table.HeadCell>Example</Table.HeadCell>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens[tokensGroup]).map((entry) => {
          const [name, value] = entry;

          return (
            <tr key={`color-${name}`}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{value}</Table.Cell>
              <DesignTokenExample tokensGroup={tokensGroup} value={value} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DesignTokensTable;
