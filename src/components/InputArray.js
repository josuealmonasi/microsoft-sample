import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { arrayToTree } from '../utils/arrayToTree';

const InputArray = () => {
  const { textToTree, settextToTree, setisFile, isFile, setTree } = useContext(AppContext);
  const [arrayAsInput, setarrayAsInput] = useState(textToTree);
  const [error, seterror] = useState(false);

  const handleFetch = () => {
    if (isFile) {
      return;
    }
    try {
      settextToTree(JSON.parse(arrayAsInput));
      setTree(arrayToTree(JSON.parse(arrayAsInput)));
      seterror(false);
    } catch (err) {
      seterror(err);
    }
  };

  const handleOnChangeInput = (e) => {
    setisFile(false);
    setarrayAsInput(e.target.value);
  };

  return (
    <div>
      <input
        value={isFile ? JSON.stringify(textToTree) : arrayAsInput}
        onChange={handleOnChangeInput}
        onKeyPress={(e) => e.key === 'Enter' && handleFetch()}
        type="text"
        name="array"
        id="array"
      />
      <button onClick={handleFetch}>Fetch</button>
      <br />
      {error && <span>Please enter an valid array!</span>}
    </div>
  );
};

export default InputArray;
