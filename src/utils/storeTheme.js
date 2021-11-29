/* Set theme to LS */
export const setThemeToLocalStorage = (key, value) => window.localStorage.setItem(key, value);
/* Get initial theme is there is one, otherwise returns default light */
export const getThemeFromLocalStorage = () => {
  const theme = window.localStorage.getItem('theme');
  if (!theme) {
    setThemeToLocalStorage('theme', 'light');
    return 'light';
  }
  return theme;
};
