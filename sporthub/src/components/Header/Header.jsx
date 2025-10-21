import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <span className="red">sport</span>hub
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} aria-label="Главное меню">
          <ul role="menubar">
            <li role="menuitem"><a href="#" onClick={closeMenu}>Review</a></li>
            <li role="menuitem"><a href="#" onClick={closeMenu}>Экстрим</a></li>
            <li role="menuitem"><a href="#" onClick={closeMenu}>Легенды</a></li>
            <li role="menuitem"><a href="#" onClick={closeMenu}>ЗОЖ и Туризм</a></li>
            <li role="menuitem"><a href="#" onClick={closeMenu}>Пoзирк</a></li>
            <li role="menuitem"><a href="#" onClick={closeMenu}>Треш</a></li>
          </ul>
        </nav>

        <button 
          className="header__burger" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && <div className="header__overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;