/*
 *
 * Title: theme
 * Description: theme
 * Author: Shah Arafat
 * Date: 24-04-2021
 *
 */

export const setThemeToRoot = () => {
  // add or remove 'dark' class to homepage
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
