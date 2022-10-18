import { Contact, Footer, Navbar, Hero, Projects, Skills } from './components';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
