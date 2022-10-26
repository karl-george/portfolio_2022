import { Contact, Footer, Navbar, Hero, Projects, Skills } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  AOS.init();
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
