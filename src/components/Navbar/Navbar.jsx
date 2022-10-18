import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

// React component to populate Navbar links menu
const Menu = () => (
  <>
    <ul>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#skills'>Skills</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='navbar'>
      <div className='navbar__container container'>
        <div className='navbar__brand'>
          <h4>Karl George</h4>
        </div>
        <div className='navbar__links__container'>
          <Menu />
        </div>
        <div className='navbar__mobile'>
          {toggleMenu ? (
            <RiCloseLine
              color='#111'
              size={29}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#111'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='navbar__mobile__container scale-up-center'>
              <div className='navbar__mobile__links__container'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
