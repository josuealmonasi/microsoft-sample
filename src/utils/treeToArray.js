/* Simple recursive function to parse a tree with this format:
  {
    "id": 1,
    "left": {
      "id": 2,
      "left": null,
      "right": null
    },
    "right": {
      "id": 3,
      "left": null,
      "right": {
        "id": 5,
        "left": null,
        "right": null
      }
    }
  }

  into something like this:
  [1,[2,null,null],[3,null,[5,null,null]]]
*/
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
