import reactImg from '../../assets/react.svg';
import bootstrapImg from '../../assets/bootstrap.svg';
import cssImg from '../../assets/css.svg';
import gitImg from '../../assets/git.svg';
import htmlImg from '../../assets/html.svg';
import jsImg from '../../assets/js.svg';
import nodeImg from '../../assets/node.svg';
import pythonImg from '../../assets/python.svg';
import './skills.css';

const Skills = () => {
  return (
    <div className='skills section__padding'>
      <div className='container'>
        <div className='skills__heading'>
          <h2 className='heading__title'>Skills</h2>
          <div className='divider'></div>
        </div>
        <div className='skills__icons__container'>
          <div>
            <img src={reactImg} className='icon' />
            <p>React</p>
          </div>
          <div>
            <img src={jsImg} className='icon' />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={htmlImg} className='icon' />
            <p>HTML</p>
          </div>
          <div>
            <img src={cssImg} className='icon' />
            <p>CSS</p>
          </div>
          <div>
            <img src={nodeImg} className='icon' />
            <p>Node.js</p>
          </div>
          <div>
            <img src={bootstrapImg} className='icon' />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={gitImg} className='icon' />
            <p>GIT</p>
          </div>
          <div>
            <img src={pythonImg} className='icon' />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
