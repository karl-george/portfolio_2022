import { RiMailLine } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact bg-tint section__padding'>
      <div className='container'>
        <div className='contact__heading'>
          <h2 className='heading__title'>Contact</h2>
          <div className='divider'></div>
        </div>
        <div className='contact__socials__container'>
          <div className='contact__socials-block'>
            <RiMailLine size={70} color={'#3b82f6'} />
            <p className='contact__socials-user'>karlgeorge87@gmail.com</p>
          </div>
          <div className='contact__socials-block'>
            <RiLinkedinBoxFill size={70} color={'#3b82f6'} />
            <p className='contact__socials-user'>Linkedin username</p>
          </div>
          <div className='contact__socials-block'>
            <RiGithubFill size={70} color={'#3b82f6'} />
            <p className='contact__socials-user'>github username</p>
          </div>
        </div>
        <div className='contact__form__container'>
          <div className='contact__form'>
            <form
              action='https://getform.io/f/e3d7ce30-4a2a-4a1e-a881-335357e05e3a'
              method='POST'
            >
              <div className='contact__form-field'>
                <label
                  className='contact__form-label
                '
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                  className='contact__form-input'
                />
              </div>
              <div className='contact__form-field'>
                <label
                  className='contact__form-label
                '
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='Enter Your Email'
                  className='contact__form-input'
                />
              </div>
              <div className='contact__form-field'>
                <label
                  className='contact__form-label
                '
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  type='text'
                  name='message'
                  placeholder='Enter Your Message'
                  className='contact__form-input'
                  rows='7'
                ></textarea>
              </div>
              <button
                className='contact__form-button btn btn-filled'
                type='submit'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
