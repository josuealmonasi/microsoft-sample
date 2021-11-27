import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { treeToArray } from '../../utils/treeToArray';

const TreeOutput = () => {
  const { settextToTree, tree, setTree } = useContext(AppContext);

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
    <div>
      {tree !== '' && (
        <>
          <p>Tree Text</p>
          <textarea
            value={JSON.stringify(tree, null, 2)}
            onChange={handleOnChange}
            name="tree"
            id="tree"
            cols="50"
            rows="50"
          />
        </>
      )}
    </div>
  );
};

export default TreeOutput;
