/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Button } from '@datacamp/waffles/button';
import Table from './table';

const nameCellStyle = css`
  vertical-align: middle;
`;

const tableCellStyle = css`
  padding-left: 2px;
`;

const textStyle = css`
  display: inline-flex;
  height: ${tokens.sizing.small};
  align-items: center;
  padding-left: 10px;
`;

const markerStyle = css`
  width: 8px;
  height: 8px;
  border-radius: ${tokens.borderRadius.circle};
`;

const availableMarkerStyle = css`
  background-color: ${tokens.colors.green};
`;

const unavailableMarkerStyle = css`
  margin-right: ${tokens.spacing.small};
  background-color: ${tokens.colors.red};
`;

type AvailableStatusProps = {
  href: string;
};

function AvailableStatus({ href }: AvailableStatusProps) {
  return (
    <Button
      as="a"
      href={href}
      variant="plain"
      size="small"
      iconLeft={<span css={[markerStyle, availableMarkerStyle]} />}
    >
      Available
    </Button>
  );
}

function UnavailableStatus() {
  return (
    <Text css={textStyle}>
      <span css={[markerStyle, unavailableMarkerStyle]} />
      Unavailable
    </Text>
  );
}

type ReactComponentStatus =
  | {
      reactStatus: 'available';
      reactComponentLink: string;
    }
  | {
      reactStatus: 'unavailable';
      reactComponentLink?: never;
    };

type FigmaComponentStatus =
  | {
      figmaStatus: 'available';
      figmaComponentLink: string;
    }
  | {
      figmaStatus: 'unavailable';
      figmaComponentLink?: never;
    };

type ComponentStatusProps = {
  name: string;
} & ReactComponentStatus &
  FigmaComponentStatus;

function ComponentStatus({
  name,
  reactStatus,
  reactComponentLink,
  figmaStatus,
  figmaComponentLink,
}: ComponentStatusProps) {
  return (
    <tr>
      <Table.Cell css={nameCellStyle}>{name}</Table.Cell>
      <Table.Cell css={tableCellStyle}>
        {reactStatus === 'available' ? (
          <AvailableStatus href={reactComponentLink!} />
        ) : (
          <UnavailableStatus />
        )}
      </Table.Cell>
      <Table.Cell css={tableCellStyle}>
        {figmaStatus === 'available' ? (
          <AvailableStatus href={figmaComponentLink!} />
        ) : (
          <UnavailableStatus />
        )}
      </Table.Cell>
    </tr>
  );
}

export default ComponentStatus;
