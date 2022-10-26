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
              <a href=''>
                <RiMailLine size={30} color={'#3b82f6'} />
              </a>
            </div>
            <div className='footer__socials-block'>
              <a href=''>
                <RiLinkedinBoxFill size={30} color={'#3b82f6'} />
              </a>
            </div>
            <div className='footer__socials-block'>
              <a href=''>
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
