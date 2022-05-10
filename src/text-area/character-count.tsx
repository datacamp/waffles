import React from 'react';

import { characterCountStyle } from './styles';

import { Text } from '../text';

type CharacterCountProps = {
  value: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  limit: number;
  id: string;
  inverted: boolean;
};

function CharacterCount({ value, limit, id, inverted }: CharacterCountProps) {
  const count = value?.toString().length || 0;

  return (
    <Text
      as="p"
      id={id}
      aria-label={`${count} of ${limit} characters used`}
      css={characterCountStyle({ inverted })}
    >{`${count} / ${limit}`}</Text>
  );
}

export default CharacterCount;
