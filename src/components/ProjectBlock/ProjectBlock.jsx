import './projectblock.css';

const ProjectBlock = ({ img, title, content, liveLink, codeLink, tech }) => {
  const techList = tech?.map((tech) => <p key={tech}>{tech}</p>);

  return (
    <div className='projectblock'>
      <div className='pb__container'>
        <div className='pb__img' data-aos='fade-up' data-aos-once='true'>
          <img src={img} />
        </div>
        <div className='pb__content' data-aos='fade-up' data-aos-once='true'>
          <h3 className='pb__content__title'>{title}</h3>
          <div className='pb__content__tech'>{techList}</div>
          <p className='pb__content__desc'>{content}</p>
          <a
            href={liveLink}
            className='btn btn-filled pb__content_button liveBtn'
            target='_blank'
          >
            Live
          </a>
          <a href={codeLink} className='btn btn-outline' target='_blank'>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
