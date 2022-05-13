// AUTO-GENERATED CONTENT - DO NOT MANUALLY EDIT - Run 'yarn generate:assets' to update

import Asset from '../asset-internal';

type AvatarPlaceholderColoredProps = Omit<
  React.ComponentProps<typeof Asset>,
  'children'
>;

function AvatarPlaceholderColored({
  width = 256,
  height = 256,
  ...restProps
}: AvatarPlaceholderColoredProps) {
  return (
    <Asset viewBox="0 0 256 256" width={width} height={height} {...restProps}>
      <path fill="#7933ff" d="M0 0h256v256H0z" />
      <path
        fill="#03ef62"
        d="M10.528 256h126.673l66.186-114.637-95.005-54.851z"
      />
      <path fill="#00c53b" d="M256 256V50.236L137.202 256z" />
    </Asset>
  );
}

export default AvatarPlaceholderColored;
