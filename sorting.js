const sorting = (arr) => {
  arrCopy = arr.slice();
  return arrCopy.sort((a, b) => a - b);
};

const arr = [2, 3, 1, 4, 4, 1, 32];

console.log(sorting(arr));
