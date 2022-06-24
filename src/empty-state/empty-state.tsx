import ListItem from './list-item';
import List from './list';
import EmptyStateInternal from './empty-state-internal';

const EmptyStateNamespace = Object.assign(EmptyStateInternal, {
  List,
  ListItem,
});

export default EmptyStateNamespace;
