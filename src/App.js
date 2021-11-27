import { useState } from 'react';
import FileReader from './utils/FileReader';
import { AppContext } from './AppContext';
import './App.css';
import InputArray from './components/InputArray/InputArray';
import TreeOutput from './components/TreeOutput/TreeOutput';
import DrawTree from './components/DrawTree/DrawTree';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  const [textToTree, settextToTree] = useState('');
  const [isFile, setisFile] = useState(false);
  const [tree, setTree] = useState('');
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ textToTree, settextToTree, isFile, setisFile, tree, setTree, error, setError }}>
        <p>Process the input into a tree</p>
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
      </AppContext.Provider>
    </div>
  );
};

export default App;
