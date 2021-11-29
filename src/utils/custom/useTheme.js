import { useEffect, useState } from 'react';
import { getThemeFromLocalStorage, setThemeToLocalStorage } from '../storeTheme';
import { themes } from '../theme';

const useTheme = () => {
  const defaultTheme = getThemeFromLocalStorage();
  const [theme, setTheme] = useState(themes[defaultTheme]);

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
