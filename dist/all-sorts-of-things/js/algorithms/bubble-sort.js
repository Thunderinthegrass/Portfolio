let arr1 = [8, 3, 5, 4, 7, 2, 1, 10, 6, 9];
let arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];

function bubbleSort(arr) {
let count = 0;
let count1 = 0;
for (let k = 0; k < arr.length; k++) {
  count++;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      let z = 0;
      z = arr[i+1]
      arr[i+1] = arr[i];
      arr[i] = z;
      count++;
    }
  }
}
console.log(arr);
console.log(count);
console.log(count1);
}
bubbleSort(arr1);
bubbleSort(arr2);
bubbleSort(arr3);
bubbleSort(arr4);
