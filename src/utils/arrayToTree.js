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
