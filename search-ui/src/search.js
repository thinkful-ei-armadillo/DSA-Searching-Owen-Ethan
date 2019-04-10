
const linearSearch = function (target, numbers) {

  let count = 0;

  for (let n = 0; n < numbers.length; n++) {

    count++;

    if (numbers[n] === target) {
      return count;
    }
  }

  return count;
};

const binarySearch = function (target, numbers) {

  let count = 0;

  const search = function (arr, value, start, end) {

    count++;

    start = start === undefined ? 0 : start;
    end = end === undefined ? arr.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = arr[index];

    if (item === value) {
        return index;
    }
    else if (item < value) {
        return search(arr, value, index + 1, end);
    }
    else if (item > value) {
        return search(arr, value, start, index - 1);
    }
  }

  search(numbers, target, 0, numbers.length-1);

  return count;
};

export default {
  linearSearch,
  binarySearch,
}
