import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Input } from '@datacamp/waffles/input';
import { useId } from '@datacamp/waffles/hooks';

const errorStyle = css`
  color: ${tokens.colors.redDarkText};
  margin-top: ${tokens.spacing.small};
`;

function Example() {
  const errorId = useId('input-error');

  return (
    <>
      <Input aria-errormessage={errorId} error placeholder="Error" />
      <Text id={errorId} as="p" css={errorStyle}>
        Error message
      </Text>
    </>
  );
}

export default Example;
