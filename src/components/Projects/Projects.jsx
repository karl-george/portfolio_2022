import ProjectBlock from '../ProjectBlock/ProjectBlock';
import picthat from '../../assets/picthatn.png';
import dga from '../../assets/dga.png';
import weather from '../../assets/weather.png';
import './projects.css';

const Projects = () => {
  return (
    <section className='projects section__padding bg-tint' id='projects'>
      <div className='container'>
        <div className='projects__heading'>
          <h2 className='heading__title'>Projects</h2>
          <div className='divider'></div>
        </div>
        <div className='projects__container'>
          <ProjectBlock
            img={picthat}
            title={`PicThat Social Media`}
            content={`A social media image sharing platform that allows users to sign in with their google account aswell as upload, favourite, download and search images and gifs uploaded by themselves and other users.`}
            liveLink={`https://picthat.netlify.app/`}
            codeLink={`https://github.com/karl-george/picthat`}
          />
          <ProjectBlock
            img={dga}
            title={`Digital Agency SPA`}
            content={`A website designed for a fictional design agency taken from initial design template through to finished product as a SPA.`}
            liveLink={`https://karl-george.github.io/digital-agency-landing/`}
            codeLink={`https://github.com/karl-george/digital-agency-landing`}
          />
          <ProjectBlock
            img={weather}
            title={`Mobile Weather App`}
            content={`A weather application that uses OpenWeather API to get the users location and displays current and future weather forecasts.`}
            liveLink={`https://karl-george.github.io/weather-app/`}
            codeLink={`https://github.com/karl-george/weather-app`}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
