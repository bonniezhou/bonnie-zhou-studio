import './Components.scss';
import LogoSvg from './Logo.js';

function Components() {
  return (
    <div>
      <Divider/>
      <div className='brandColors'>
        <div className='lightOrange'></div>
        <div className='lightBlue'></div>
        <div className='accentOrange'></div>
        <div className='accentPink'></div>
        <div className='darkBlue'></div>
        <div className='darkViolet'></div>
      </div>
      <Logo/>
      <h1>H1 — Title (Alice)</h1>
      <h2>H2 — Subheader (Raleway)</h2>
      <h3>H3 — Special text (Alice)</h3>
      {Button('Button (Raleway)')}
      <p>Body text (Questrial)</p>
      <Divider/>

      {/* <h3>
        Artwork for expressing the sensuality, movement, 
        and beauty of the human body. Inspired by 
        my love of dance, nature and lingerie.
      </h3> */}

      <h3>
        Artwork for the dreamer. The young at heart, wild and free. Endless Saturdays and lazy Sundays. Coming to peace with chaos. Friend groups and after parties. A beautiful organic mess.
        <br /><br />
        Inspired by a love of dance, plants, and music.
      </h3>
      {Button('Shop the Collection')}
      <p>
      My drawings are inspired by the energy of the lingerie community, and also by dancers and music videos. I read the other day a post from a dancer that I look up to, in which she shared that she’s always held shame around sensual, sexual, soft, or feminine movement that she’s only now starting to unpack and explore. I think a lot of us in this community have felt the power of lingerie in healing our relationship with our bodies, but I realize that lots of women around the world have body shame that holds them back from expressing themselves sensually, sexually, softly, femininely. Several people have told me that my lingerie photos and openness about my body inspires them come to peace with theirs. It’s a beautiful thing that we do.
      I support body neutrality, but I myself am body positive. Our bodies are the vessel for our souls and beautiful works of art that deserve to be cherished, drawn, painted, sculpted, moved, admired, fucked, wrapped in silk and lace, shown off to the world if we want. I hope my drawings can convey the same sensuality, movement, and love/self-love as my lingerie photos and dance. Please share if they speak to you, as it’s always intimidating to start a new adventure and I would love your support! Also I’m still a lingerie addict and photography lover so continue to expect lots of selfies peppered in between art posts 😘
      </p>
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
