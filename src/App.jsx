import { Contact, Footer, Navbar, Hero, Projects, Skills } from './components';

import './App.css';

function App() {
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
