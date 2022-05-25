import MenuInternal from './menu-internal';
import Item from './item';
import Category from './category';
import Button from './button';

const MenuNamespace = Object.assign(MenuInternal, {
  Item,
  Button,
  Category,
});

export default MenuNamespace;
