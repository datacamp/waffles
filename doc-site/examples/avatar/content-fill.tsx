import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';
import { Avatar } from '@datacamp/waffles/avatar';
import { AvatarPlaceholderColored } from '@datacamp/waffles/asset';

function Example() {
  return (
    <>
      <Heading as="h4">Asset Content</Heading>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          margin-bottom: ${tokens.spacing.small};
        `}
      >
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
      <Heading as="h4">Image Content</Heading>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          margin-bottom: ${tokens.spacing.small};
        `}
      >
        <Avatar
          size="xxsmall"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="xsmall"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="small"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="medium"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="large"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="xlarge"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="xxlarge"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="huge"
          contentFill
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
      </div>
    </>
  );
}

export default Example;
