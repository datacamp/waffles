import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Rocket } from '@datacamp/waffles/icon';
import { Avatar } from '@datacamp/waffles/avatar';
import { AvatarPlaceholderColored } from '@datacamp/waffles/asset';

function Workbench() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
        color: ${tokens.colors.navy};
      `}
    >
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          color: ${tokens.colors.navy};
        `}
      >
        <Avatar content="AB" />
        <Avatar content="AB" size="xsmall" />
        <Avatar content="AB" size="small" />
        <Avatar content="AB" size="medium" />

        <Avatar content="AB" size="large" />
        <Avatar content="AB" size="xlarge" />
        <Avatar content="AB" size="xxlarge" />
        <Avatar content="AB" size="xxxlarge" />
      </div>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          color: ${tokens.colors.navy};
        `}
      >
        <Avatar content={<Rocket />} />
        <Avatar content={<Rocket />} size="xsmall" />
        <Avatar content={<Rocket />} size="small" />
        <Avatar content={<Rocket />} size="medium" />

        <Avatar content={<Rocket />} size="large" />
        <Avatar content={<Rocket />} size="xlarge" />
        <Avatar content={<Rocket />} size="xxlarge" />
        <Avatar content={<Rocket />} size="xxxlarge" />
      </div>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          color: ${tokens.colors.navy};
        `}
      >
        <Avatar content={<AvatarPlaceholderColored />} />
        <Avatar content={<AvatarPlaceholderColored />} size="xsmall" />
        <Avatar content={<AvatarPlaceholderColored />} size="small" />
        <Avatar content={<AvatarPlaceholderColored />} size="medium" />

        <Avatar content={<AvatarPlaceholderColored />} size="large" />
        <Avatar content={<AvatarPlaceholderColored />} size="xlarge" />
        <Avatar content={<AvatarPlaceholderColored />} size="xxlarge" />
        <Avatar content={<AvatarPlaceholderColored />} size="xxxlarge" />
      </div>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          color: ${tokens.colors.navy};
        `}
      >
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
        />
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="xsmall"
        />
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="small"
        />
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="medium"
        />

        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="large"
        />
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="xlarge"
        />
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="xxlarge"
        />
        <Avatar
          content={
            <img src="https://media.istockphoto.com/photos/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-picture-id1150254232?k=20&m=1150254232&s=170667a&w=0&h=VEk0K_pT6N6DJQQN1ELXgHulJGkbWm5WOhh4Ou901YQ=" />
          }
          size="xxxlarge"
        />
      </div>
    </div>
  );
}

export default Workbench;
