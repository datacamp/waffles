import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';

const wrapperStyle = css`
  margin-top: ${tokens.spacing.small};
`;

const tableStyle = css`
  border-collapse: separate;
  table-layout: fixed;
  border-spacing: 0;
  width: 100%;
`;

const tableCellStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  text-align: left;
  word-wrap: break-word;
  vertical-align: top;
  padding-top: ${tokens.spacing.small};
  padding-bottom: ${tokens.spacing.small};
  padding-left: 12px;
  padding-right: 12px;
`;

const tableHeadCellStyle = css`
  font-size: ${tokens.fontSizes.small};
  font-weight: ${tokens.fontWeights.bold};
  line-height: ${tokens.lineHeights.default};
  letter-spacing: ${tokens.letterSpacing.relaxed};
  text-transform: uppercase;
  border-top: 0;
`;

const tableBodyCellStyle = css`
  font-size: ${tokens.fontSizes.medium};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  background-color: ${tokens.colors.white};
  border-top: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};

  &:first-of-type {
    border-left: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  }

  &:last-of-type {
    border-right: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  }

  tr:first-of-type &:first-of-type {
    border-top-left-radius: ${tokens.borderRadius.medium};
  }

  tr:first-of-type &:last-of-type {
    border-top-right-radius: ${tokens.borderRadius.medium};
  }

  tr:last-of-type &:first-of-type {
    border-bottom-left-radius: ${tokens.borderRadius.medium};
  }

  tr:last-of-type &:last-of-type {
    border-bottom-right-radius: ${tokens.borderRadius.medium};
  }

  tr:last-of-type & {
    border-bottom: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  }
`;

type TableCellProps = React.HTMLAttributes<HTMLTableCellElement>;

function TableHeadCell(props: TableCellProps) {
  return <th css={[tableCellStyle, tableHeadCellStyle]} {...props} />;
}

function TableCell(props: TableCellProps) {
  return <td css={[tableCellStyle, tableBodyCellStyle]} {...props} />;
}

type TableProps = {
  children: React.ReactNode;
};

function Table({ children }: TableProps) {
  return (
    <div css={wrapperStyle}>
      <table css={tableStyle}>{children}</table>
    </div>
  );
}

Table.Cell = TableCell;
Table.HeadCell = TableHeadCell;

export default Table;
