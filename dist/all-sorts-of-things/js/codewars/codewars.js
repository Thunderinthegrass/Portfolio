//task1 This code does not execute properly. Try to figure out why.
let btn1 = document.querySelector('.btn-1').onclick = () => {
  document.querySelector('.out-1').innerHTML = multiply1(30, 50);
}


function multiply1(a, b){
  let z = a * b
  return z;
}

//task 2 Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

let btn2 = document.querySelector('.btn-2').onclick = () => {
  document.querySelector('.out-2').innerHTML = multiply2(arr);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function multiply2(num) {
  let z = '';
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i]);
  }
  z = `(${arr[0] + arr[1] + arr[2]}) ${arr[3] + arr[4] + arr[5] + '-'}${arr[6] + arr[7] + arr[8] + arr[9]}`;
  return z;
}

//task 3 Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
let inp1 = document.querySelector('.inp-1');

let btn3 = document.querySelector('.btn-3').onclick = () => {
  let v = inp1.value;
  document.querySelector('.out-3').innerHTML = spinWords(v);
};

function spinWords(z){
  //TODO Have fun :)
  let a = z.split(' ');
  let v = '';
  let x = '';
  for (let k = 0; k < a.length; k++) { 
    if (a[k].length >= 5) {
      a[k] = a[k].split('');
      a[k] = a[k].reverse();
      a[k] = a[k].join('');
    } 
    x += a[k] + ' ';
  }
  return x;
}
console.log(spinWords('ха привет животные'));