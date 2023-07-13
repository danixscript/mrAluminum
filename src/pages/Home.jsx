import About from '../components/home/About';
import Footer from '../components/home/Footer';
import OpeningImage from '../components/home/OpeningImage';
import Squars from '../components/home/Squars';
import '../css/home.css'

function Home() {
  return (
    <div className="homeAllPage">
       
        <OpeningImage/>
        <About/>
        <Squars/>
        <Footer/>
 
    </div>
  );
}

export default Home;
