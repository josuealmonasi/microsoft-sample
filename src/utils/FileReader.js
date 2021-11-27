import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { INVALID_FILE } from './appConstants';
import { arrayToTree } from './arrayToTree';
import { validateInput } from './validateArray';

const FileReaderInput = () => {
  let fileReader;

  const { settextToTree, setisFile, setTree, setError } = useContext(AppContext);

  const onLoadEded = () => {
    try {
      const { result } = fileReader;
      const parsed = JSON.parse(result);
      const parseError = !validateInput(parsed) || !parsed.hasOwnProperty('length');
      settextToTree(!parseError ? parsed : '');
      setTree(!parseError ? arrayToTree(parsed) : INVALID_FILE);
      setError(parseError);
    } catch (err) {
      setError(!!err);
    }
  };

  const handleFile = (file) => {
    if (file) {
      fileReader = new FileReader();
      fileReader.onloadend = onLoadEded;
      fileReader.readAsText(file);
    }
    setisFile(true);
  };

  return <input type="file" accept=".json" onChange={(e) => handleFile(e.target.files[0])} />;
};

export default FileReaderInput;
