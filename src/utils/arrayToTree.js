/* 
  Example:
    arr = [1, null, [2]]
    arrayToTree(arr)
    \--> {id: 1, left: arrayToTree(null), right: arrayToTree([2])}
                       arrayToTree(null)         arrayToTree([2])
                                --> null                --> {id: 1}
    that results in:
    
    {
      "id": 1,
      "left": null,
      "right": {
        "id": 2
      }
    }

*/
export const arrayToTree = (arr) => {
  if (arr === null) {
    return null;
  }
  if (arr.length === 1) {
    return { id: arr[0] };
  }
  if (arr.length === 2) {
    return { id: arr[0], left: arrayToTree(arr[1]) };
  }
  if (arr.length === 3) {
    return { id: arr[0], left: arrayToTree(arr[1]), right: arrayToTree(arr[2]) };
  }
};
