// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'yarn generate:assets' to update

import Asset from '../asset-internal';

type AvatarPlaceholderProps = Omit<
  React.ComponentProps<typeof Asset>,
  'children'
>;

function AvatarPlaceholder({
  width,
  height,
  ...restProps
}: AvatarPlaceholderProps) {
  return (
    <Asset viewBox="0 0 256 256" {...restProps}>
      <path fill="currentColor" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M10.528 256h126.673l66.186-114.637-95.005-54.851zM256 256V50.236L137.202 256z"
      />
    </Asset>
  );
}

export default AvatarPlaceholder;
