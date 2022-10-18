import { Contact, Footer, Navbar, Hero, Projects, Skills } from './components';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <div className='container'>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
