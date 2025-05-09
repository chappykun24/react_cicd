import { useEffect } from 'react'
import Nav from "./components/Nav";
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards";
import About from "./components/About";
import Collaborators from "./components/Collaborators";
import HowDoesItWork from './components/HowDoesItWork';
import Service from './components/Service';
import Comments from './components/Comments';
import Pricing from './components/Pricing';
import Backup from './components/Backup';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    if (typeof window.navbarInit === 'function') {
      window.navbarInit();
    }
  }, []);

  return (
    <>
      <main className="main" id="top">
        <div className="content">
          <Nav />

          <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
            <Hero />
            <InfoCards/>
            <About/>
            <Collaborators/>
            <HowDoesItWork/>
            <Service/>
            <Comments/>
            <Pricing/>
            <Backup/>
            <Contact/>
          </div>

          <Footer/>
        </div>
      </main>
    </>
  )
}

export default App
