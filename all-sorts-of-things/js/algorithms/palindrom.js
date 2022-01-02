let out = document.querySelector('.out');
let inp = document.querySelector('.pal-inp');
let btn = document.querySelector('.btn');

function palindrom() {
  let v = inp.value;
  let first = '';
  let second = '';

  for (let i = 0; i < v.length; i++) {
    first += v[i];
  }

  for (let i = v.length-1; i > -1; i--) {
    second += v[i];
  }

  if (first === second) {
    out.innerHTML = 'Это палиндром';
  }
  else {
    out.innerHTML = 'Это не палиндром';
  }
}
btn.addEventListener('click', palindrom);

function int() {
  let f = 'e';
  console.log(isNaN(f));//проверка на число, является ли переменная не числом.

  let x = 3;
  if ((x % 1) == 0) {
    console.log('число целое');
  }
  else {
    console.log('число не целое');//является ли число целым
  }

  console.log(x === Math.trunc(x));//ещё один вариант проверки на целое число. Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.

  //поменять переменные местами:
  let a = 10;
  let b = 'hello';

  let c = 0;

  c = a;
  a = b;
  b = c;

  //второй вариант:
  let d = 100;
  let e = 'hello hello';

  [d, e] = [e, d];

  console.log(d,e);
  console.log(3 === '3');

  console.log('0 == false', 0 == false);//true
  console.log('0 === false', 0 === false);//false
  console.log('1 == false', 1 == '1');//true
  console.log('1 === false', 1 === 1);//false
  console.log('null == undefined', null == undefined);//true
  console.log('null === undefined', null === undefined);//false
  console.log('0', '== false', '0' == false);//true
  console.log(`'0', === false`, '0' === false);//false
  console.log('[] == []',[] == []);//false
  console.log('[] === []',[] === []);//false
  console.log('{} === {}', {} == {});//false
  console.log('{} === {}', {} === {});//false

  //сортировка массива
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
}
int();
