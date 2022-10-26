import { RiMailLine } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import './footer.css';

const Footer = () => {
  return (
    <section className='footer footer__bg'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__brand'>Karl George</div>
          <div className='footer__socials__container'>
            <div className='footer__socials-block'>
              <a href='mailto:karlgeorge87@gmail.com' target='_blank'>
                <RiMailLine size={30} color={'#3b82f6'} />
              </a>
            </div>
            <div className='footer__socials-block'>
              <a
                href='https://www.linkedin.com/in/karl-george-aab588159/'
                target='_blank'
              >
                <RiLinkedinBoxFill size={30} color={'#3b82f6'} />
              </a>
            </div>
            <div className='footer__socials-block'>
              <a href='https://github.com/karl-george' target='_blank'>
                <RiGithubFill size={30} color={'#3b82f6'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
