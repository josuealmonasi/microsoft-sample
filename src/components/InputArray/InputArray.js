import { useMemo, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { FETCH_BUTTON } from '../../utils/appConstants';
import { arrayToTree } from '../../utils/arrayToTree';
import { validateInput } from '../../utils/validateArray';
import ErrorMessage from '../Error/ErrorMessage';

const InputArray = () => {
  const { textToTree, settextToTree, setisFile, isFile, setTree, error, setError } =
    useContext(AppContext);
  const [arrayAsInput, setarrayAsInput] = useState(textToTree);

  useMemo(() => setarrayAsInput(textToTree), [textToTree]);

  const handleFetch = () => {
    if (isFile || error) {
      return;
    }
    try {
      settextToTree(arrayAsInput);
      setTree(arrayToTree(JSON.parse(arrayAsInput)));
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  const handleOnChangeInput = (e) => {
    try {
      setisFile(false);
      setarrayAsInput(e.target.value);
      const parsedInput = JSON.parse(e.target.value);
      setError(!validateInput(parsedInput));
    } catch (err) {
      setError(!!err);
    }
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
      <button disabled={error} onClick={handleFetch}>
        {FETCH_BUTTON}
      </button>
      <br />
      {error && <ErrorMessage />}
    </div>
  );
};

export default InputArray;
