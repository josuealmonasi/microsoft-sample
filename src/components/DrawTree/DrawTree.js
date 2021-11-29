import { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../AppContext';
import { INVALID_FILE } from '../../utils/appConstants';
import { findSubTree } from '../../utils/findSmallestSubtree';
import { Info, Tree, TreeContainer, TreeLeave, TreeRoot } from './styled';

const DrawTree = () => {
  const { tree } = useContext(AppContext); // Gets the tree fromthe state
  const [isSmallestSubTree, setIsSmallestSubTree] = useState(false);
  /* This next line helps us keep track of the smallest subtree even if the original tree changes */
  useMemo(() => setIsSmallestSubTree(findSubTree(tree)), [tree]);

  /* This function returns in a recursive way, a component that represents
    each node of our parsed input i.e. 
    [1, null, [2]] -> {
                        "id": 1,
                        "left": null,
                        "right": {
                          "id": 2
                        }
                      }
  */
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
  /* Return the container and the root of the tree */
  return <TreeContainer>{tree !== '' && tree !== INVALID_FILE && square(tree)}</TreeContainer>;
};

export default DrawTree;
