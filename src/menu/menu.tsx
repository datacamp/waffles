import MenuInternal from './menu-internal';
import Item from './item';
import Button from './button';
import Category from './category';

const MenuNamespace = Object.assign(MenuInternal, {
  Item,
  Button,
  Category,
});

export default MenuNamespace;
