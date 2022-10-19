import './projectblock.css';

const ProjectBlock = ({ img, title, content, liveLink, codeLink }) => {
  return (
    <div className='projectblock'>
      <div className='pb__container'>
        <div className='pb__img'>
          <img src={img} />
        </div>
        <div className='pb__content'>
          <h3>{title}</h3>
          <p>{content}</p>
          <a href='' className='btn btn-filled'>
            Live
          </a>
          <a href='' className='btn btn-outline'>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
