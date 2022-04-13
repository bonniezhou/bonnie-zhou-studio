import './Components.scss';

function Components() {
  return (
    <div>
      <h1>H1 — Title</h1>
      <h2>H2 — Subheader</h2>
      <h3>H3 — Special text</h3>
      {Button('Button')}
      <p>Body text</p>
      <Divider/>

      <h3>
      Artwork for expressing the sensuality, movement, 
      and beauty of the human body. Inspired by 
      my love of dance, nature and lingerie.
      </h3>
      {Button('Shop the Collection')}
      <p>
      My drawings are inspired by the energy of the lingerie community, and also by dancers and music videos. I read the other day a post from a dancer that I look up to, in which she shared that she’s always held shame around sensual, sexual, soft, or feminine movement that she’s only now starting to unpack and explore. I think a lot of us in this community have felt the power of lingerie in healing our relationship with our bodies, but I realize that lots of women around the world have body shame that holds them back from expressing themselves sensually, sexually, softly, femininely. Several people have told me that my lingerie photos and openness about my body inspires them come to peace with theirs. It’s a beautiful thing that we do.
      I support body neutrality, but I myself am body positive. Our bodies are the vessel for our souls and beautiful works of art that deserve to be cherished, drawn, painted, sculpted, moved, admired, fucked, wrapped in silk and lace, shown off to the world if we want. I hope my drawings can convey the same sensuality, movement, and love/self-love as my lingerie photos and dance. Please share if they speak to you, as it’s always intimidating to start a new adventure and I would love your support! Also I’m still a lingerie addict and photography lover so continue to expect lots of selfies peppered in between art posts 😘
      </p>
    </div>
  );
}

const Button = (text) => <button>{text}</button>

const IconButton = (icon) => <button className='iconButton material-icons'>{icon}</button>

function Divider() {
  return (
    <div className="divider"></div>
  );
}

export {Components, Button, IconButton, Divider};
