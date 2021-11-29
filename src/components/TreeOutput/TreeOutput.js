import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { treeToArray } from '../../utils/treeToArray';
import { TreeAsText } from './styled';

const TreeOutput = () => {
  const { settextToTree, tree, setTree } = useContext(AppContext);

  /* This allows the user to change any value directly from the JSON in the text area
    and will be reflected in the input if this is a valid change */
  const handleOnChange = (e) => {
    try {
      const temporalTree = JSON.parse(e.target.value);
      setTree(temporalTree);
      settextToTree(JSON.stringify(treeToArray(temporalTree)));
    } catch (error) {
      return;
    }
  };

  return (
    <>
      {tree !== '' && (
        <TreeAsText
          value={JSON.stringify(tree, null, 2)}
          onChange={handleOnChange}
          name="tree"
          id="tree"
          cols="40"
          rows="30"
        />
      )}
    </>
  );
};

export default TreeOutput;
