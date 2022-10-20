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
    </div>
  );
};

export default Contact;
