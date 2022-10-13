import './App.css';
import { NavBar } from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
