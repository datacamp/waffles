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
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="xsmall"
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="small"
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="medium"
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="large"
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="xlarge"
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="xxlarge"
          contentFillSpace
          content={<AvatarPlaceholderColored />}
        />
        <Avatar
          size="huge"
          contentFillSpace
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
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="xsmall"
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="small"
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="medium"
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="large"
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="xlarge"
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="xxlarge"
          contentFillSpace
          content={
            <img
              src="../../images/profile-portrait-placeholder.png"
              alt="Example image placeholder"
            />
          }
        />
        <Avatar
          size="huge"
          contentFillSpace
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
