import { useContext, useMemo, useState } from 'react';
import { AppContext } from '../AppContext';
import { findSubTree } from '../utils/findSmallestSubtree';

const style = {
  display: 'flex',
  margin: 'auto'
};

const squareStyle = {
  border: 'solid 2px #ffbbff',
  background: '#fff6c7',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '2px',
  margin: '2px'
};

const leavesStyle = {
  display: 'flex',
  justifyContent: 'center',
  minWidth: '70px'
};
const rootStyle = {
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const DrawTree = () => {
  const { tree } = useContext(AppContext);
  const [isSmallestSubTree, setIsSmallestSubTree] = useState(false);
  useMemo(() => setIsSmallestSubTree(findSubTree(tree)), [tree]);

  const square = (node, level = 0) => {
    let currentLevel = level + 1;
    if (node === null) {
      return <div style={squareStyle}>Null</div>;
    }
    return (
      <div style={style}>
        <div
          style={{
            ...squareStyle,
            borderColor:
              `${isSmallestSubTree.id}-${isSmallestSubTree.level}` === `${node.id}-${currentLevel}`
                ? '#01c57c'
                : '#ffbbff'
          }}>
          {node.hasOwnProperty('id') && <div style={rootStyle}>{node.id}</div>}
          <div style={leavesStyle}>
            {node.hasOwnProperty('left') && square(node.left, currentLevel)}
            {node.hasOwnProperty('right') && square(node.right, currentLevel)}
          </div>
        </div>
        <small style={{ color: '#bebebe' }}>{`Level ${currentLevel}`}</small>
      </div>
    );
  };

  return <div style={style}>{tree !== '' && square(tree)}</div>;
};

export default DrawTree;
