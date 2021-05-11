/*
 *
 * Title: Navbar
 * Description: Navbar
 * Author: Shah Arafat
 * Date: 24-04-2021
 *
 */
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { setThemeToRoot } from '../../helpers/themes';
import logo from '../../icons/noteitlogo.png';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // store
  // const {
  //   state: {
  //     user: { name },
  //   },
  //   dispatch,
  // } = useStore();

  const toggleTheme = () => {
    localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(localStorage.getItem('theme'));
    // set theme
    setThemeToRoot();
  };

  return (
    // <nav
    //   className={`container-area text-white h-20 dark:bg-midnightBlue bg-sourLemon md:bg-none relative md:static flex justify-between items-center`}
    // >
    //   <Link className="font-bold text-2xl text-electromagnatic dark:text-sourLemon font-barlow">
    //     Noteit
    //   </Link>

    //   <ul
    //     className={`absolute md:static top-20 md:top-auto left-0 md:left-auto w-3/4 md:w-auto divide-solid md:divide-none divide-electromagnatic divide-y-2 shadow-2xl md:shadow-none bg-sourLemon dark:bg-midnightBlue md:flex md:items-center transform transition-all ${
    //       isMobileNavOpen ? '' : '-translate-x-full'
    //     } md:-translate-x-0 nav-main `}
    //     id="nav-main"
    //   >
    //     <li className="mx-2">
    //       <button
    //         onClick={toggleTheme}
    //         className={`text-md block px-3 py-4 md:py-2 md:rounded-lg dark:bg-sourLemon dark:text-electromagnatic bg-electromagnatic text-sourLemon font-railway font-semibold`}
    //       >
    //         {/* toggle theme icon */}
    //         {theme === 'dark' ? <FaSun /> : <FaMoon />}
    //       </button>
    //     </li>
    //     <li className="mx-2">
    //       <p
    //         href="#"
    //         className="text-md block px-3 py-4 md:py-2 md:rounded-lg hover:bg-electromagnatic font-railway text-electromagnatic dark:text-sourLemon hover:text-sourLemon font-semibold"
    //       >
    //         {name}
    //       </p>
    //     </li>
    //     <li className="mx-2">
    //       <button
    //         onClick={() => logoutUser(dispatch)}
    //         className="text-md block px-3 py-4 md:py-2 md:rounded-lg hover:bg-electromagnatic font-railway text-electromagnatic dark:text-sourLemon hover:text-sourLemon font-semibold"
    //       >
    //         Logout
    //       </button>
    //     </li>
    //   </ul>
    //   <div
    //     onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
    //     className="text-xl md:hidden text-electromagnatic dark:text-sourLemon "
    //     id="hamburger-icon"
    //   >
    //     {isMobileNavOpen ? <FaTimes /> : <FaBars />}
    //   </div>
    // </nav>

    <nav
      className={` min-h-screen bg-sourLemon w-4/5 sm:w-3/5 md:w-2/5 lg:w-72  shadow-md px-2 flex flex-col `}
    >
      {/* title section */}
      <div className="flex justify-between items-center text-electromagnatic border-b border-wetEsphalt">
        <div className="flex items-center">
          <img src={logo} alt="site logo" className="mr-2 w-10 py-3" />
          <h1 className="font-barlow text-3xl font-bold">Noteit</h1>
        </div>
        <button onClick={toggleTheme} className="text-2xl focus:outline-none ">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* tags list */}
      {/* user */}
    </nav>
  );
};

export default Navbar;
