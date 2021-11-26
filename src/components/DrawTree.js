import { useContext } from 'react';
import { AppContext } from '../AppContext';

const style = {
  display: 'flex',
  margin: 'auto'
};

const squareStyle = {
  border: 'solid 1px black',
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

  const square = (node) => {
    if (node === null) {
      return <div style={squareStyle}>Null</div>;
    }
    return (
      <div style={style}>
        <div style={squareStyle}>
          {node.hasOwnProperty('id') && <div style={rootStyle}>{node.id}</div>}
          <div style={leavesStyle}>
            {node.hasOwnProperty('left') && square(node.left)}
            {node.hasOwnProperty('right') && square(node.right)}
          </div>
        </div>
      </div>
    );
  };

  return <div style={style}>{tree !== '' && square(tree)}</div>;
};

export default DrawTree;
