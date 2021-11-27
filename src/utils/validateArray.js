export const validateInput = (arr) => {
  if (arr === null || arr === undefined) {
    return true;
  }
  if (arr.length > 3) {
    return false;
  }
  while (arr.length < 3) {
    arr.push(null);
  }
  return arr[0] && validateInput(arr[1]) && validateInput(arr[2]);
};

//call like this  !!validateInput(testArray)
