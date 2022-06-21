import ListItem from './list-item';
import List from './list';
import EmptyStateInternal from './empty-state-internal';
import Content from './content';

const EmptyStateNamespace = Object.assign(EmptyStateInternal, {
  Content,
  List,
  ListItem,
});

export default EmptyStateNamespace;
