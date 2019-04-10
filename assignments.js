const BST = require('./BinarySearchTree')


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

    if (arr[start] !== undefined) {
      console.log(arr[start]);
    }
    return;
  }

  const node = arr[start];

  // cal indexes for left
  let leftStart = start + 1;
  let leftEnd   = leftStart;

  while (arr[leftEnd] < node) {    // maybe <=
    leftEnd++;
  }
  leftEnd--;

  traverse(arr, leftStart, leftEnd);

  // cal indexes for right
  let rightStart = leftEnd + 1;
  let rightEnd   = end;

  traverse(arr, rightStart, rightEnd);

  console.log(node);
};


traverse(preOrderTraversal, 0, preOrderTraversal.length-1);


// Implement different tree traversals

const sample = new BST();

sample.insert(25,25);
sample.insert(15,15);
sample.insert(50,50);
sample.insert(10,10);
sample.insert(24,24);
sample.insert(35,35);
sample.insert(70,70);
sample.insert(4,4);
sample.insert(12,12);
sample.insert(18,18);
sample.insert(31,31);
sample.insert(44,44);
sample.insert(66,66);
sample.insert(90,90);
sample.insert(22,22);

console.log(sample);


const inOrder = function (tree) {
  if (tree.left) {  inOrder(tree.left);  }
  console.log(tree.key);
  if (tree.right) { inOrder(tree.right); }
};

const preOrder = function (tree) {
  console.log(tree.key);
  if (tree.left) {  preOrder(tree.left);  }
  if (tree.right) { preOrder(tree.right); }
};

const postOrder = function (tree) {
  if (tree.left) {  postOrder(tree.left);  }
  if (tree.right) { postOrder(tree.right); }
  console.log(tree.key);
};

// preOrder(sample);
// inOrder(sample);
// postOrder(sample);
