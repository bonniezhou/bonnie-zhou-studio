import './Components.scss';
import LogoSvg from './Logo.js';

function Components() {
  return (
    <div>

      <Divider/>
      <div className='brandColors'>
        <div className='light'></div>
        <div className='dark'></div>
        <div className='accent'></div>
      </div>
      <h1>H1 — Title (Alice)</h1>
      <h2>H2 — Subheader (Raleway)</h2>
      <h3>H3 — Special text (Alice)</h3>
      {Button('Button (Raleway)')}
      <p>Body text (Questrial)</p>
    </div>
  );
}

const Logo = () => 
  <div className='logo'>
    <div className='logoSvg'><LogoSvg /></div>
  </div>

const Button = (text) => <button>{text}</button>

const IconButton = (icon) => <button className='iconButton material-icons'>{icon}</button>

const TextField = (placeholder) => <input className='textField' type='text' placeholder={placeholder}/>

function Divider() {
  return (
    <div className="divider"></div>
  );
}

export {Components, Button, IconButton, Logo, TextField, Divider};
