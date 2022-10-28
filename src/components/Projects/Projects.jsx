import ProjectBlock from '../ProjectBlock/ProjectBlock';
import news from '../../assets/news.png';
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
            img={dga}
            title={`Digital Agency SPA`}
            content={`A website designed for a fictional design agency taken from initial design template through to finished product as a SPA.`}
            liveLink={`https://karl-george.github.io/digital-agency-landing/`}
            codeLink={`https://github.com/karl-george/digital-agency-landing`}
          />
          <ProjectBlock
            img={news}
            title={`News App`}
            content={`A news application designed to allow the user to filter news stories based upon categories. The app uses NewsAPI to source news stories from all of the major news providers. Unfortunately the API does not allow deploying to a live site for free and so there is no live preview.`}
            liveLink={``}
            codeLink={`https://github.com/karl-george/news-app`}
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
