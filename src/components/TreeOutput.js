import { useContext } from 'react';
import { AppContext } from '../AppContext';

const TreeOutput = () => {
  const { tree } = useContext(AppContext);

  return (
    <div>
      <p>Tree Text</p>
      <textarea
        value={JSON.stringify(tree, null, 2)}
        name="tree"
        id="tree"
        cols="50"
        rows="60"></textarea>
    </div>
  );
};

export default TreeOutput;
