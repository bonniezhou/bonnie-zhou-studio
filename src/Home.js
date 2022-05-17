import NavBar from './NavBar';
import Email from './Email';
import Footer from './Footer';
import { Button } from './Components.js';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <NavBar />
      <div className='header' />
      <h3>
        Artwork inspired by the movement, sensuality, and expression of the body
      </h3>
      {Button('Shop the Collection')}
      <h4>Sometimes we spark like fire, but sometimes we're meant to flow like water. My art explores the ways we express ourselves through our bodies — the physical manifestation of our souls — and the innate connection we have to elements of nature.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lorem elementum, tincidunt urna vitae, vestibulum nunc. Curabitur a nisi iaculis arcu vestibulum fermentum eget ac odio. Mauris ultricies augue vitae mattis eleifend. Nullam at dapibus elit. Aliquam auctor nec magna ut sagittis. Aliquam condimentum placerat justo ornare malesuada. Curabitur id laoreet nibh. Praesent scelerisque elit vitae dolor imperdiet, in finibus erat varius.</p>
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
