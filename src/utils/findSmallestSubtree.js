/* Helper funtion to find height */
export const findHeight = (tree) => {
  if (tree === null || tree === undefined) return 0;
  if (tree?.left === null && tree?.right === null) return 1;
  return Math.max(findHeight(tree?.left || null), findHeight(tree?.right || null)) + 1; // + 1 because of the root
};

/* 
  Find the smalles subtree with deepest nodes, this is a recursive function i.e.
  {
    "id": 1,          As root is not null, it will find the height for both branches
    "left": {         This height is 1 as per the function above +1 if we count the root
      "id": 2,
      "left": null,
      "right": null
    },
    "right": {        This height is 2 as per the function above +1 if we count the root
      "id": 3,        this will be called recursively and we will have something like this:
      "left": null,   findSubTree(tree) returns
      "right": {                findSubTree(tree.right) returns
        "id": 5,                      findSubTree(tree.right) returns 
        "left": null,                       findSubTree(tree.right) returns {id: 5, left: null, right: null}
        "right": null
      }
    }
  }

*/
export const findSubTree = (root) => {
  /* We'll keep a track of a temporal node */
  let tempNode = null;
  if (root === null) return tempNode;
  /* Find height for both branches */
  let rightHeight = findHeight(root?.right);
  let leftHeight = findHeight(root?.left);
  /* If right is higer, temporal node is equal to right,
     if left is higer, temporal node is equal to left,
     otherwise, it'll be equal to the root meaning 
     both children are the same height */
  if (rightHeight > leftHeight) {
    tempNode = findSubTree(root.right);
  } else if (leftHeight > rightHeight) {
    tempNode = findSubTree(root.left);
  } else {
    tempNode = root;
  }
  /* Returns temporal node and the level where is was found */
  return {
    ...tempNode,
    level:
      Math.max(rightHeight, leftHeight) -
      Math.max(findHeight(tempNode.left || null), findHeight(tempNode.right || null)) +
      1
  };
};
