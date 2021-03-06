import Subcategory from './subcategory';
import SideNavigationInternal from './side-navigation-internal';
import Nav from './nav';
import Item from './item';
import Category from './category';

const SideNavigationNamespace = Object.assign(SideNavigationInternal, {
  Nav,
  Item,
  Category,
  Subcategory,
});

export default SideNavigationNamespace;
