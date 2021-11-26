export const treeToArray = (tree) => {
  const result = [];
  if (tree === null) {
    return null;
  }
  if (tree.hasOwnProperty('id')) {
    result.push(tree.id);
  }
  if (tree.hasOwnProperty('left')) {
    result.push(treeToArray(tree.left));
  }
  if (tree.hasOwnProperty('right')) {
    result.push(treeToArray(tree.right));
  }
  return result;
};
