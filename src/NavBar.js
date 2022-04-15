import './NavBar.scss';
import { IconButton, Logo } from './Components';

function NavBar() {
  return (
    <div className='navBar'>
      <div className='navStart'>
        {IconButton('menu')}
        <Logo />
      </div>
      <div className='navEnd'>
        {NavButton('Shop')}
        {NavButton('About')}
        {IconButton('shopping_cart')}
      </div>
    </div>
  );
}

const NavButton = (text) => <button className='navButton'>{text}</button>

export default NavBar;