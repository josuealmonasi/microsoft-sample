export const validateInput = (arr) => {
  if (arr === null || arr === undefined) {
    return true;
  }
  if (arr.length > 3) {
    return false;
  }
  /* Fills the array  with nulls so the condition
    above won't break when recursive */
  while (arr.length < 3) {
    arr.push(null);
  }
  return arr[0] && validateInput(arr[1]) && validateInput(arr[2]);
};

//call like this  !!validateInput(testArray)
