import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function App() {


  return (
    <>
      <div>

        <div>
          <Header />
        </div>
        <div id="Home">
          <Home />
        </div>
        <div id="About">
          <About />
        </div>

        <div id="Services">
          <Services />
        </div>

        <div id="Features">
          <Features />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>




    </>
  )

}


export default App