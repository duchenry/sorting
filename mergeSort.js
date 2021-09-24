const sorting = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  //split the array into left and right components
  const middle = Math.floor(arr.length / 2);
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
      console.log(result);
      leftIndex++; /* comparison between left and right every single value */
      console.log(left.length);
    } else {
      result.push(right[rightIndex]);
      console.log(result);
      rightIndex++; /* comparison between left and right every single value */
      console.log(right.length);
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arr = [2, 4, 1, 5, 2, 4, 4, 3];
console.log(sorting(arr));
