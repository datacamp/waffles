import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Code } from '@datacamp/waffles/code';

import convertedProps from '../helpers/converted-props';
import markdownElements from '../components/props-table-markdown-elements';

import Table from './table';

const POLYMORPHIC_METADATA = {
  name: 'as',
  description:
    'The element used to render this component, e.g. `a` or react router `Link`.',
  type: 'React.ElementType',
  isOptional: true,
};

const descriptionStyle = css`
  width: 50%;
`;

const typeStyle = css`
  display: inline-block;
  white-space: normal;
  word-break: break-word;
  padding: 2px ${tokens.spacing.xsmall};
`;

const nameStyle = css`
  ${typeStyle}
  background-color: ${hexToRgba(tokens.colors.blue, tokens.opacity.low)};
`;

const requiredMarkerStyle = css`
  color: ${tokens.colors.redDark};
  margin-left: ${tokens.spacing.xsmall};
`;

type PropsTableProps = {
  metadata: Record<string, unknown>;
  isPolymorphic: boolean;
};

function PropsTable({ metadata, isPolymorphic = false }: PropsTableProps) {
  const propsMetadata = convertedProps(metadata);

  if (isPolymorphic) {
    propsMetadata.unshift(POLYMORPHIC_METADATA);
  }

  return (
    <ErrorBoundary>
      <Table>
        <thead>
          <tr>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell css={descriptionStyle}>Description</Table.HeadCell>
          </tr>
        </thead>
        <tbody>
          {propsMetadata.map((singleProp) => {
            return (
              <tr key={`prop-${singleProp.name}`}>
                <Table.Cell>
                  <Code css={nameStyle}>{singleProp.name}</Code>
                  {!singleProp.isOptional && (
                    <span aria-label="Is required" css={requiredMarkerStyle}>
                      &bull;
                    </span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Code css={typeStyle}>{singleProp.type}</Code>
                </Table.Cell>
                <Table.Cell>
                  {singleProp.description ? (
                    <ReactMarkdown components={markdownElements}>
                      {singleProp.description}
                    </ReactMarkdown>
                  ) : (
                    '—'
                  )}
                </Table.Cell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ErrorBoundary>
  );
}

export default PropsTable;
