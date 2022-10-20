import ProjectBlock from '../ProjectBlock/ProjectBlock';
import news from '../../assets/news.png';
import dga from '../../assets/dga.png';
import weather from '../../assets/weather.png';
import './projects.css';

const Projects = () => {
  return (
    <section className='projects section__padding container'>
      <div className='projects__heading'>
        <h2 className='heading__title'>Projects</h2>
        <div className='divider'></div>
      </div>
      <div className='projects__container'>
        <ProjectBlock
          img={dga}
          title={`Title of project`}
          content={`Short explanation of what the project is about and how it was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut posuere felis. Aenean in mi vitae nisi pretium volutpat.`}
          liveLink={``}
          codeLink={``}
        />
        <ProjectBlock
          img={news}
          title={`Title of project`}
          content={`Short explanation of what the project is about and how it was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut posuere felis. Aenean in mi vitae nisi pretium volutpat.`}
          liveLink={``}
          codeLink={``}
        />
        <ProjectBlock
          img={weather}
          title={`Title of project`}
          content={`Short explanation of what the project is about and how it was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut posuere felis. Aenean in mi vitae nisi pretium volutpat.`}
          liveLink={``}
          codeLink={``}
        />
      </div>
    </section>
  );
};

export default Projects;
