import NavBar from './NavBar';
import Email from './Email';
import Footer from './Footer';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <NavBar />
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
