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
        Artwork inspired by the expression, movement, and sensuality of the body
      </h3>
      <h4>Sometimes we can spark like fire, but sometimes we're meant to flow like water. My art explores the ways we express ourselves through our bodies — the physical manifestation of our souls — and the innate connection we have to elements of nature.</h4>
      {Button('Shop the Collection')}
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
