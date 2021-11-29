import { useEffect, useState } from 'react';
import { getThemeFromLocalStorage, setThemeToLocalStorage } from '../storeTheme';
import { themes } from '../theme';

/* Custom hook for handling theme */
const useTheme = () => {
  /* Gets the theme name from local storage */
  const defaultTheme = getThemeFromLocalStorage();
  /* theme variable is the current theme name */
  const [theme, setTheme] = useState(themes[defaultTheme]);

  /* Helper function that hanldes changing themes */
  const switchTheme = (name) => {
    setTheme(themes[name]);
    setThemeToLocalStorage('theme', name);
  };

  useEffect(() => {
    setTheme(themes[defaultTheme]);
  }, [defaultTheme, theme]);

  return { theme, switchTheme };
};

export default useTheme;
