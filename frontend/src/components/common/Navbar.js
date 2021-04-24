/*
 *
 * Title: Navbar
 * Description: Navbar
 * Author: Shah Arafat
 * Date: 24-04-2021
 *
 */
import React, { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { setThemeToRoot } from '../../helpers/themes';
import { logoutUser } from '../../store/actions/users';
import { useStore } from '../../store/Store';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState('');
  // store
  const {
    state: {
      user: { name },
    },
    dispatch,
  } = useStore();

  const toggleTheme = () => {
    localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(localStorage.getItem('theme'));
    // set theme
    setThemeToRoot();
  };

  return (
    <nav
      className={`container-area text-white h-20 dark:bg-midnightBlue bg-sourLemon relative md:static flex justify-between items-center`}
    >
      <Link className="font-bold text-2xl text-electromagnatic dark:text-sourLemon font-barlow">
        Noteit
      </Link>

      <ul
        className={`absolute md:static top-20 md:top-auto left-0 md:left-auto w-3/4 md:w-auto divide-solid md:divide-none divide-electromagnatic divide-y-2 shadow-2xl md:shadow-none bg-sourLemon dark:bg-midnightBlue md:flex md:items-center transform transition-all ${
          isMobileNavOpen ? '' : '-translate-x-full'
        } md:-translate-x-0 nav-main `}
        id="nav-main"
      >
        <li className="mx-2">
          <button
            onClick={toggleTheme}
            className={`text-md block px-3 py-4 md:py-2 md:rounded-lg dark:bg-sourLemon dark:text-electromagnatic bg-electromagnatic text-sourLemon font-railway font-semibold`}
          >
            {/* toggle theme icon */}
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </li>
        <li className="mx-2">
          <p
            href="#"
            className="text-md block px-3 py-4 md:py-2 md:rounded-lg hover:bg-electromagnatic font-railway text-electromagnatic dark:text-sourLemon hover:text-sourLemon font-semibold"
          >
            {name}
          </p>
        </li>
        <li className="mx-2">
          <button
            onClick={() => logoutUser(dispatch)}
            className="text-md block px-3 py-4 md:py-2 md:rounded-lg hover:bg-electromagnatic font-railway text-electromagnatic dark:text-sourLemon hover:text-sourLemon font-semibold"
          >
            Logout
          </button>
        </li>
      </ul>
      <div
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className="text-xl md:hidden text-electromagnatic dark:text-sourLemon "
        id="hamburger-icon"
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
