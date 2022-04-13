import './NavBar.css';
import { IconButton } from './Components';

function NavBar() {
  return (
    <div className='navBar'>
      NavBar
      {IconButton('menu')}
    </div>
  );
}

export default NavBar;