import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';

import { tokens } from '@datacamp/waffles/tokens';
import convertedProps from '../helpers/converted-props';
import markdownElements from '../components/props-table-markdown-elements';
import Table from './table';

const POLYMORPHIC_METADATA = {
  name: 'as',
  description:
    'The element used to render this component, e.g. `a`, or react router `Link`.',
  type: 'React.ElementType',
  isOptional: true,
};

const descriptionStyle = css`
  width: 50%;
`;

const nameStyle = css`
  font-weight: ${tokens.fontWeights.bold};
`;

const requiredMarkerStyle = css`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: ${tokens.borderRadius.circle};
  background-color: ${tokens.colors.red};
  vertical-align: top;
  margin-top: 2px;
  margin-left: 4px;
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
              <Table.Cell css={nameStyle}>
                {singleProp.name}
                {!singleProp.isOptional && (
                  <span aria-label="Is required" css={requiredMarkerStyle} />
                )}
              </Table.Cell>
              <Table.Cell>{singleProp.type}</Table.Cell>
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
  );
}

export default PropsTable;
