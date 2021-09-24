const sorting = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length) / 2;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(sorting(left), sorting(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arr = [4, 1, 2, 6, 2, 3, 3, 6, 1, 6, 7];

console.log(sorting(arr));
