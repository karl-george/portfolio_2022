import './navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='navbar__container container'>
        <div className='navbar__brand'>
          <h4>Karl George</h4>
        </div>
        <div className='navbar__links__container'>
          <ul className='navbar__links'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Projects</a>
            </li>
            <li>
              <a href=''>Skills</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
