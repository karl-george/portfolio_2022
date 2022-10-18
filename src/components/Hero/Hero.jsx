import './hero.css';

const Hero = () => {
  return (
    <div className='hero hero__bg'>
      <div className='container'>
        <div className='hero__container'>
          <h1 className='hero__title'>
            Hi, I'm <span className='text-accent'>Karl</span>
          </h1>
          <p className='hero__content'>
            A <span className='text-accent'>Front-End Web Developer </span>
            passionate about creating interactive and responsive experiences on
            the web.{' '}
          </p>
          <button>PROJECTS</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
