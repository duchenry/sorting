const sorting = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

const arr = [2, 4, 15, 2, 1, 6];
console.log(sorting(arr));
