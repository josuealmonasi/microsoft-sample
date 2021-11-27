import { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../AppContext';
import { INVALID_FILE } from '../../utils/appConstants';
import { findSubTree } from '../../utils/findSmallestSubtree';
import { Info, Tree, TreeContainer, TreeLeave, TreeRoot } from './styled';

const DrawTree = () => {
  const { tree } = useContext(AppContext);
  const [isSmallestSubTree, setIsSmallestSubTree] = useState(false);
  useMemo(() => setIsSmallestSubTree(findSubTree(tree)), [tree]);

  const square = (node, level = 0) => {
    let currentLevel = level + 1;
    if (node === null) {
      return <Tree>Null</Tree>;
    }
    return (
      <TreeContainer>
        <Tree
          isDeepest={
            `${isSmallestSubTree.id}-${isSmallestSubTree.level}` === `${node.id}-${currentLevel}`
          }>
          {node.hasOwnProperty('id') && <TreeRoot>{node.id}</TreeRoot>}
          <TreeLeave>
            {node.hasOwnProperty('left') && square(node.left, currentLevel)}
            {node.hasOwnProperty('right') && square(node.right, currentLevel)}
          </TreeLeave>
        </Tree>
        <Info>{`Level ${currentLevel}`}</Info>
      </TreeContainer>
    );
  };

  return <TreeContainer>{tree !== '' && tree !== INVALID_FILE && square(tree)}</TreeContainer>;
};

export default DrawTree;
