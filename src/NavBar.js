import './NavBar.scss';
import { IconButton, MenuButton } from './Components';

function NavBar() {
  return (
    <div className='navBar'>
      <div>
        {IconButton('menu')}
      </div>
      <div>
        {MenuButton('Shop')}
        {MenuButton('About')}
        {IconButton('shopping_cart')}
      </div>
    </div>
  );
}

export default NavBar;