import NavBar from './NavBar';
import Email from './Email';
import Footer from './Footer';
import { Button } from './Components.js';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <NavBar />
      <h3>
        Artwork inspired by the movement, sensuality, and expression of the body
      </h3>
      <h4>Sometimes we spark like fire, but sometimes we're meant to flow like water. My art explores the ways we express ourselves through our bodies — the physical manifestation of our souls — and the innate connection we have to elements of nature.</h4>
      {Button('Shop the Collection')}
      <p>In my art, I reconnect with our existence as human beings on Earth. No screens, no judgement, just our bodies and nature. I explore themes of ease and resistance, peace in chaos, and coming home to who we are. Imperfect wholeness. Physical manifestations. A beautiful organic mess.</p>
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
