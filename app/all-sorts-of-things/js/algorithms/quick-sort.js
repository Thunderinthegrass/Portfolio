function quickSortV1() {
  const arr1 = [23, 56, 43, 384, 2, 28374649, 77, 90];
  const arr2 = [23, 24, 25, 26, 27, 28, 29, 30];

  function getRandomArray(z) {//генератор массива
    let arr = [];
    for (let i = 0; i < z; i++) {
      let x = Math.floor(Math.random() * z);
      arr.push(x);
    }
    return arr;
  }
  let arrRandom = getRandomArray(100);
  console.log(arrRandom);

  // const newArray = arr1.sort((a, b) => a - b);//сортировочный метод массива
  // console.log(newArray);

  function isSorted(arr) {//проверка, отсортирован ли массив
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(isSorted(arr1));

  function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    let index = Math.floor(Math.random() * arr.length);
    let more = [];
    let less = [];
    let currentItem = arr[index];

    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        continue;
      }

      if (arr[i] > currentItem) {
        more.push(arr[i]);
      }
      else {
        less.push(arr[i]);
      }
    }


    // console.log(currentItem, index, more, less);
    return [...quickSort(less), currentItem, ...quickSort(more)];

  }
  console.log(quickSort(arr1));
}
// quickSortV1();

function quickSortV2() {
  function getRandomArray(z) {//генератор массива
    let arr = [];
    for (let i = 0; i < z; i++) {
      let x = Math.floor(Math.random() * z);
      arr.push(x);
    }
    return arr;
  }
  let arrR = getRandomArray(10);
  // console.log(arr);

  function qsort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    let index = Math.floor(Math.random() * arr.length);
    let currentItem = arr[index];
    let less = [];
    let more = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        continue;
      }
      if (arr[i] < currentItem) {
        less.push(arr[i]);
      }
      else {
        more.push(arr[i]);
      }
    }
    return [...qsort(less), currentItem, ...qsort(more)];

  }
  console.log(qsort(arrR));
}
quickSortV2();
