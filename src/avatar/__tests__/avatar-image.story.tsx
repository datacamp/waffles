import { Avatar } from '../index';

function Story() {
  return (
    <Avatar
      data-testid="avatar"
      content={
        <img src="/images/profile-pic-example.png" alt="Avatar image example" />
      }
    />
  );
}

export default Story;
