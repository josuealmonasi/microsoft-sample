import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { arrayToTree } from './arrayToTree';

const FileReaderInput = () => {
  let fileReader;

  const { settextToTree, setisFile, setTree } = useContext(AppContext);

  const onLoadEded = () => {
    const { result } = fileReader;
    const parsed = JSON.parse(result);
    const { length } = parsed;
    settextToTree(length ? parsed : '');
    setTree(arrayToTree(parsed));
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
