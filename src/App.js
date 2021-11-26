import { useState } from 'react';
import FileReader from './utils/FileReader';
import { AppContext } from './AppContext';
import './App.css';
import InputArray from './components/InputArray';
import TreeOutput from './components/TreeOutput';
import DrawTree from './components/DrawTree';

const App = () => {
  const [textToTree, settextToTree] = useState('');
  const [isFile, setisFile] = useState(false);
  const [tree, setTree] = useState('');

  return (
    <div className="App">
      <AppContext.Provider value={{ textToTree, settextToTree, isFile, setisFile, tree, setTree }}>
        <p>Process the input into a tree</p>
        <InputArray />
        <p>
          <span>or</span>
        </p>
        <FileReader />
        <TreeOutput />
        <DrawTree />
      </AppContext.Provider>
    </div>
  );
};

export default App;
