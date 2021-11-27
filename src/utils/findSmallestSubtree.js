export const findHeight = (tree) => {
  if (tree === null || tree === undefined) return 0;
  if (tree?.left === null && tree?.right === null) return 1;
  return Math.max(findHeight(tree?.left || null), findHeight(tree?.right || null)) + 1;
};

export const findSubTree = (root, prevNode) => {
  if (root === null) return prevNode;
  let rightHeight = findHeight(root?.right);
  let leftHeight = findHeight(root?.left);
  if (leftHeight > rightHeight) {
    prevNode = findSubTree(root.left, prevNode);
  } else if (rightHeight > leftHeight) {
    prevNode = findSubTree(root.right, prevNode);
  } else {
    prevNode = root;
    return {
      ...prevNode,
      level:
        Math.max(rightHeight, leftHeight) -
        Math.max(findHeight(prevNode.left || null), findHeight(prevNode.right || null)) +
        1
    };
  }
  return {
    ...prevNode,
    level:
      Math.max(rightHeight, leftHeight) -
      Math.max(findHeight(prevNode.left || null), findHeight(prevNode.right || null)) +
      1
  };
};
