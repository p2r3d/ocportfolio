import Nav from '../../components/Nav';
import Gallery from '../../components/Gallery';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import "../../style/main.scss";

function Home() {
    return (
    <div className='homeContainer'>
      <Nav />
      <AboutMe/>
      <Gallery/>
      <Skills/>
      <Contact/>
    </div>);
}


export default Home;
