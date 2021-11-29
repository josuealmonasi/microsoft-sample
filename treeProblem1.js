/* This is the same code I use for the we app */
const arrayToTree = (arr) => {
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

const test1 = [
  'a',
  ['b', ['b1'], ['b2', ['b21'], ['b22']]],
  ['c', ['c1', ['c11', ['c111']], ['c12', null, ['c121']]], ['c2', null, ['c21']]]
];
const test2 = [1, [2], [3, null, [5]]];

console.log(arrayToTree(test1));
console.log(arrayToTree(test2));
