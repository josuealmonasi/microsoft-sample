import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import FileReader from './utils/FileReader';
import { AppContext } from './AppContext';
import InputArray from './components/InputArray/InputArray';
import TreeOutput from './components/TreeOutput/TreeOutput';
import DrawTree from './components/DrawTree/DrawTree';
import Tabs from './components/Tabs/Tabs';
import { GlobalStyle } from './utils/theme';
import useTheme from './utils/custom/useTheme';
import SwitchTheme from './components/ChangeThemeButton/SwitchTheme';
import Footer from './components/Footer/Footer';
import { TITLE } from './utils/appConstants';

const App = () => {
  const { theme, switchTheme } = useTheme();
  const [textToTree, settextToTree] = useState('');
  const [isFile, setisFile] = useState(false);
  const [tree, setTree] = useState('');
  const [error, setError] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  /* Change theme handler */
  const handleSwitchTheme = () => {
    const themeName = theme.name;
    /* Limited to only two modes for now */
    switchTheme(themeName === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setSelectedTheme(theme);
    /* Listen for any theme change */
  }, [theme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <AppContext.Provider /* Context */
        value={{ textToTree, settextToTree, isFile, setisFile, tree, setTree, error, setError }}>
        <SwitchTheme caption={theme.name} handleChange={handleSwitchTheme} />
        <p>{TITLE}</p>
        <InputArray />
        <p>
          <span>or</span>
        </p>
        <FileReader />
        {tree !== '' && (
          <>
            <Tabs>
              <TreeOutput title={'Tree as text'} />
              <DrawTree title={'Drawn Tree'} />
            </Tabs>
          </>
        )}
        <Footer />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
