import './contact.css';

const Contact = () => {
  return (
    <div className='contact bg-tint section__padding'>
      <div className='container'>
        <div className='contact__heading'>
          <h2 className='heading__title'>Contact</h2>
          <div className='divider'></div>
        </div>
        <div className='contact__form__container'>
          <div className='contact__form'>
            <form action='#' method='POST'>
              <input type='text' name='name' />
              <input type='email' name='email' />
              <input type='text' name='message' />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
