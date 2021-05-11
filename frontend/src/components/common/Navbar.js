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
import { SingleTag } from '..';
import { setThemeToRoot } from '../../helpers/themes';
import logo from '../../icons/noteitlogo.png';
import { useStore } from '../../store/Store';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const {
    state: {
      tags,
      user: { name },
    },
  } = useStore();

  const toggleTheme = () => {
    localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(localStorage.getItem('theme'));
    // set theme
    setThemeToRoot();
  };

  return (
    <nav
      className={` min-h-screen max-h-screen overflow-y-auto bg-sourLemon shadow-md px-2 flex flex-col `}
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
      <div className="mt-6">
        {tags.map((tag) => (
          <SingleTag key={tag._id} tag={tag} />
        ))}
      </div>

      {/* user */}
      <button className="mt-auto my-4 grid place-items-center bg-midnightBlue font-railway text-white rounded-full py-2 font-semibold shadow-md ">
        {`Logged in as ${name}`}
      </button>
    </nav>
  );
};

export default Navbar;
