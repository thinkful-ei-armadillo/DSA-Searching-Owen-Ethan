
// How many Searches

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18

// Find 8
// 11, 5, 6, 8

// Find 16
// 11, 15, 17, -1








// Searching in a BST

// in order (left, center, right)
// 14 15 19 25 27 35 79 89 90 91

// pre order (center, left, right)
// 35 25 15 14 19 27 89 79 91 90

const preOrderTraversal = [35, 25, 15, 14, 19, 27, 89, 79, 91, 90];


const traverse = function (arr, start, end) {

  if (start >= end) {
    console.log(arr[start]);
    return;
  }

  const node = arr[start];


  // cal indexes for left
  let leftStart = start + 1;
  let leftEnd   = leftStart;

  while (arr[leftEnd] < node) {    // maybe <=
    leftEnd++;
  }
  traverse(arr, leftStart, leftEnd);

  // cal indexes for right

  let rightStart = leftEnd + 1;
  let rightEnd   = end;
  traverse(arr, rightStart, rightEnd);

  console.log(node);

};

traverse(preOrderTraversal, 0, preOrderTraversal.length-1);
