const BST = require('./BinarySearchTree');
const Queue = require('./Queue');

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


// traverse(preOrderTraversal, 0, preOrderTraversal.length-1);


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

// console.log(sample);


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

function bfs(tree, values=[]) {
  const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)

  queue.enqueue(tree);

  while (queue.first) {
    const node = queue.dequeue(); //remove from the queue

    values.push(node.value); // add that value from the queue to an array

    if (node.left) {
      queue.enqueue(node.left); //add left child to the queue
    }

    if (node.right) {
      queue.enqueue(node.right); // add right child to the queue
    }
  }

  return values;
}

const officers = new BST();

officers.insert(100, 'Captain Picard');
officers.insert(90, 'Commander Riker');
officers.insert(110, 'Commander Data');
officers.insert(80, 'Lt. Cmdr Worf');
officers.insert(95, 'Lt. Cmdr LaForge');
officers.insert(120, 'Lt. Cmdr Crusher');
officers.insert(70, 'Lieutenant security-officer');
officers.insert(115, 'Lieutenant Selar');


// console.log(officers);
// console.log(bfs(officers));


// Answer:
//
// Captain Picard                       1
// Commander Riker                      2 1
// Commander Data                       2 2
// Lt. Cmdr Worf                        3 1
// Lt. Cmdr LaForge                     3 2
// Lt. Cmdr Crusher                     3 3
// Lieutenant security-officer          4 1
// Lieutenant Selar                     4 2


// Share prices

const sharePrices = [128, 97, 121, 123, 98, 97, 105];

const calcBuyDay = function (sharePrices) {

  let highestGain = 0;
  let buyDay = null;

  for (let d = 1; d < sharePrices.length; d++) {

    const gain = sharePrices[d] - sharePrices[d-1];

    if (gain > highestGain) {
      highestGain = gain;
      buyDay = d-1;
    }
  }

  return buyDay;
};

console.log(calcBuyDay(sharePrices));
