type IconModule = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

type GroupedIcons = {
  regular: IconModule;
  inverted: IconModule;
};

// Split icons into regular and inverted based on their names
function groupedIcons(allIcons: IconModule): GroupedIcons {
  return Object.entries(allIcons).reduce((groupedIcons, entry) => {
    const [name, Icon] = entry;

    if (name.toLowerCase().includes('inverted')) {
      return {
        ...groupedIcons,
        inverted: {
          ...groupedIcons.inverted,
          [name]: Icon,
        },
      };
    }

    return {
      ...groupedIcons,
      regular: {
        ...groupedIcons.regular,
        [name]: Icon,
      },
    };
  }, {} as GroupedIcons);
}

export default groupedIcons;
