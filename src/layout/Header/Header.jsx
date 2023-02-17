import React from 'react';

import {NavLink} from 'react-router-dom'

import './header.scss';

import Logo from '../../assets/img/spacex_logo.png';

const navItems = [
  {title: 'Главная', path: '/'},
  {title: 'Технология', path: '/tech'},
  {title: 'График полетов', path: '/timetable'},
  {title: 'Гарантии', path: '/guarantees'},
  {title: 'О компании', path: '/about'},
  {title:'Контакты', path: '/contacts'},
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo-box">
            <img
              className="header__logo-img"
              src={Logo}
              alt="Logo"
            />
          </div>

          <ul className="header__nav-menu">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="header__nav-item"
              >
                <NavLink
                  className={({isActive}) =>
                    'header__nav-link' + (isActive ? ' header__nav-link_active' : '')
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
