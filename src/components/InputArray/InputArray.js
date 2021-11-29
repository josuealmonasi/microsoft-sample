import { useMemo, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { FETCH_BUTTON } from '../../utils/appConstants';
import { arrayToTree } from '../../utils/arrayToTree';
import { validateInput } from '../../utils/validateArray';
import ErrorMessage from '../Error/ErrorMessage';

const InputArray = () => {
  /* Getting the state from context */
  const { textToTree, settextToTree, setisFile, isFile, setTree, error, setError } =
    useContext(AppContext);
  const [arrayAsInput, setarrayAsInput] = useState(textToTree);

  useMemo(() => setarrayAsInput(textToTree), [textToTree]);

  /* This function calls setTree() with the user input
   If there is an eror this will not run*/
  const handleFetch = () => {
    if (isFile || error) {
      return;
    }
    settextToTree(arrayAsInput);
    setTree(arrayToTree(JSON.parse(arrayAsInput)));
  };

  /* Gets the value from the input, sets isFile to false
    our local state for array is updated with the input value
    and checking for validation errors */
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
        value={isFile ? JSON.stringify(textToTree) : arrayAsInput} // This condition only helps to properly format our input text
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
