// // // звуки совы---------------------старое
// let btn = document.querySelector('.btn');
// let owl = document.querySelector('.owl');
// let owl1 = document.querySelector('.owl1');
// let owl2 = document.querySelector('.owl2');
//
// // let owlCub = document.querySelector('.owl-cub');
// // let owlCub1 = document.querySelector('.owl-cub1');
// // let krik = false;
// // let krikInterval = 1000;
// // let interval = 0;
// // let sound1 = owl;
// // let sound2 = owl1
//
// // let sounds = [owl, owl1, owl2, owlCub, owlCub1];
// // let sound = sounds[Math.floor(Math.random() * sounds.length)];
//
// function randomSound() {
//   let sounds = [owl, owl1, owl2];
//   let sound = sounds[Math.floor(Math.random() * sounds.length)];
//   sound.volume = Math.random() * 1;
//   console.log(sound.volume);
//   sound.play();
// }
//
// // function intSound() {
// //   setInterval(randomSound, 2000);
// // }
//
//
// // function rand(min, max){
// // return (max-min)*Math.random()+min;
// // }
//
// // let del = rand(2000, 20);
//
// let z = 5000;
// // document.querySelector('.btn').onclick = setInterval(randomSound, rand(10000, 50));
//
// document.querySelector('.btn').onclick = function () {
//   btn.classList.toggle('active');
//   if (btn.classList.contains('active')) {
//     setInterval(randomSound, z);
//   }
// }
//
// // let btn2 = document.querySelector('.btn-2').onclick = function() {
// //   clearInterval(del);
// // }


//звуки совы 8.10.2021===========
//доделано 22.10.2021============
// // звуки совы---------------------
let btn = document.querySelector('.btn');
let owl = document.querySelector('.owl');
let owl1 = document.querySelector('.owl1');
let owl2 = document.querySelector('.owl2');
let countCont = document.querySelector('.count-cont');

let x = 0;
let timer;

function randomSound() {
  function rand(min, max){
    x = (max-min)*(Math.floor(Math.random() * 300))+min;
    return x;
  }

  x = rand(1000, 2000);

  console.log(x / 1000);

  let sounds = [owl, owl1, owl2];
  let sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.volume = Math.random() * 1;
  sound.play();

  let y = x / 1000;
  timer = setTimeout(randomSound, x);
  let count = setInterval(function() {
    y = y - 1;
    countCont.innerHTML = y;
    if (y == 0) {
      clearInterval(count);
    }
  }, 1000)


}

document.querySelector('.btn').onclick = randomSound;


let z = 5000;
