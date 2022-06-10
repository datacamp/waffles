import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';
import { Avatar } from '@datacamp/waffles/avatar';
import { AvatarPlaceholderColored } from '@datacamp/waffles/asset';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
  flex-wrap: wrap;
  margin-bottom: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <>
      <Heading size="medium">Asset Content</Heading>
      <div css={wrapperStyle}>
        <Avatar
          size="xxsmall"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="xsmall"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="small"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="medium"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="large"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="xlarge"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="xxlarge"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="huge"
          contentFill
          content={<AvatarPlaceholderColored />}
        />
      </div>
      <Heading size="medium">Image Content</Heading>
      <div
        css={css`
          ${wrapperStyle}
          margin-bottom: 0;
        `}
      >
        <Avatar
          size="xxsmall"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="xsmall"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="small"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="medium"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="large"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="xlarge"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="xxlarge"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
        <Avatar
          size="huge"
          contentFill
          content={
            <img src="/images/profile-pic-example.png" alt="Example image" />
          }
        />
      </div>
    </>
  );
}

export default Example;
