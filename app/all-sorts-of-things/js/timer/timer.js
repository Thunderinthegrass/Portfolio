// let timerItem = document.querySelectorAll('.timer__item');
// let arrowBtnUp = document.querySelectorAll('.arrow-btn-up');
// let arrowBtnDown = document.querySelectorAll('.arrow-btn-down');

// for (let i = 0; i < timerItem.length; i++) {

//   timerItem[i].value = '00';

//   // timerItem[i].addEventListener('focus', ()=>{
//   //     timerItem[i].value = '';
//   // })

//   function plusZero() {//добавляет ноль, если число в ячейке меньше 10
//     if (timerItem[i].value < 10) {
//       timerItem[i].value = '0' + +timerItem[i].value;
//     }
//   }

//   //увеличение/уменьшение числа в ячейке по нажатию стрелок вверх-вниз
//   arrowBtnUp[i].addEventListener('click', () => {
//     timerItem[i].value = +timerItem[i].value + 1;
//     plusZero();

//     if (timerItem[2].value == 60) {//сброс миллисекунд на 0, если они равны 100

//       timerItem[2].value = '00';
//     }
//   })

//   arrowBtnDown[i].addEventListener('click', () => {
//     if (timerItem[i].value > 0) {
//       timerItem[i].value = +timerItem[i].value - 1;
//       plusZero();
//     }
//   })


//   //увеличение числа в ячейке по удержанию кнопки вверх
//   arrowBtnUp[i].onmousedown = function () {
//     let timeoutArrowUp = setTimeout(function () {
//       let timerUp = setInterval(function () {
//         timerItem[i].value = +timerItem[i].value + 1;

//         plusZero();

//         if (timerItem[3].value == 100) {//сброс миллисекунд на 0, если они равны 100
//           clearInterval(timerUp);
//           timerItem[3].value = '00';
//         }

//         if (timerItem[2].value == 60) {//сброс миллисекунд на 0, если они равны 100
//           clearInterval(timerUp);
//           timerItem[2].value = '00';
//         }

//       }, 70)

//       arrowBtnUp[i].onmouseup = function () {
//         clearInterval(timerUp);

//         plusZero();
//       }

//     }, 200)

//     arrowBtnUp[i].onmouseup = function () {
//       clearTimeout(timeoutArrowUp);

//       plusZero();
//     }
//   }

//   // уменьшение числа в ячейке по удержанию кнопки вниз

//   arrowBtnDown[i].onmousedown = function () {
//     let timeoutArrowDown = setTimeout(function () {//задержка после того, как кнопка нажата
//       let timerDown = setInterval(function () {//интервал увеличения числа при нажатой кнопке
//         if (timerItem[i].value > 0) {
//           timerItem[i].value = +timerItem[i].value - 1;
//         }

//         plusZero();
//       }, 70)

//       arrowBtnDown[i].onmouseup = function () {
//         clearInterval(timerDown);//останавливаем интервал после mouseup

//         plusZero();
//       }

//     }, 200)

//     arrowBtnDown[i].onmouseup = function () {
//       clearTimeout(timeoutArrowDown);//останавливаем таймаут, если mouseup произошло раньше, чем кончилась задержка таймаута

//       plusZero();
//     }
//   }


//   // arrowBtnUp[i].addEventListener('mouseup', ()=>{
//   //   clearTimeout(timeoutArrow);
//   // })
// }

// let start = document.querySelector('.timer-start-btn');
// let stop = document.querySelector('.stop');
// let dis = document.querySelector('.discharge');





// let ms = +document.querySelector('.mil-seconds').value;
// // ms = +ms + 1;

// document.querySelector('.mil-seconds').value = +ms;


// start.addEventListener('click', () => {//запуск убывания миллисекунд
//   let ms = +document.querySelector('.mil-seconds').value;
//   let msDown = setInterval(function () {
//     document.querySelector('.mil-seconds').value = ms;
//     console.log(ms);
//     console.log(typeof ms);
//     if (ms > 0) {
//       ms--;
//     }
//     else {
//       clearInterval(msDown);
//       // plusZero();
//     }

//   }, 10)

//   if (ms == 0) {
//     clearInterval(msDown);
//     sDown();
//   }

// })

// let s = +document.querySelector('.seconds').value;
// if (s < 10) {
//   s = '0' + s;
// }
// function sDown() {//запуск убывания секунд
//   let s = +document.querySelector('.seconds').value;
//   if (s < 10) {
//     s = '0' + s;
//   }
//   let sDown = setInterval(function () {
//     document.querySelector('.seconds').value = s;

//     if (s < 10) {
//       s = '0' + s;
//     }

//     console.log(s);
//     console.log(typeof s);

//     if (s > 0) {
//       s--;
//     }
//     else {
//       clearInterval(sDown);
//       // plusZero();
//     }

//   }, 1000)

//   if (s == 0) {
//     clearInterval(sDown);
//     // plusZero();
//   }

// }

// // plusZero();


// // let s = document.querySelector('.seconds');
// let m = document.querySelector('.minutes');
// let h = document.querySelector('.hours');




//v2---------------------------------------------------------
// let ms = document.querySelector('.mil-seconds');
// let s = document.querySelector('.seconds');
// let m = document.querySelector('.minutes');
// let h = document.querySelector('.hours');
//
// let start = document.querySelector('.timer-start-btn');
//
// start.onclick = function () {
//   let msDown = setInterval(function() {
//     if (ms.value > 0) {
//     ms.value = ms.value - 1;
//     }
//
//   }, 10)
//
//   if (ms.value == 0) {
//     let sDovn = setInterval(function() {
//       if (s.value > 0) {
//         s.value = s.value - 1;
//         }
//     }, 1000)
//   }
//
//
//   if (ms.value == 0) {
//     s.value = s.value -1;
//   }
// }


// v3===================================24.10.2021
const ms = document.querySelector('.mil-seconds');
const s = document.querySelector('.seconds');
const m = document.querySelector('.minutes');
const h = document.querySelector('.hours');

const arrowsUp = document.querySelectorAll('.arrow-btn-up');
const arrowsDown = document.querySelectorAll('.arrow-btn-down');
const timerItem = document.querySelectorAll('.timer__item');

let k = 0;

function arrowsButtons() {
  for (let i = 0; i < timerItem.length; i++) {
    arrowsUp[i].addEventListener('click', function increase() {
      let z = timerItem[i].value;
      if (z == '') {
        z = 0;
        z = Number(z);
      }
      if (z >= 0) {
        z++;
        if (z < 10 && z >= 0) {
          z = '0' + z;
        }
        timerItem[i].value = z;
      }
      console.log(timerItem[i].value);
    })

    arrowsDown[i].addEventListener('click', function decrease() {
      let z = timerItem[i].value;
      if (z == '') {
        z = 0;
        z = Number(z);
      }
      if (z >= 1) {
        z = z - 1;
        if (z < 10 && z >= 0) {
          z = '0' + z;
        }
        timerItem[i].value = z;
      }
    })
  }
}

arrowsButtons();


const start = document.querySelector('.timer-start-btn');
const dis = document.querySelector('.discharge');

ms.value = '00';
s.value = '00';
m.value = '00';
h.value = '00';

function timer() {
  let sTime;
  let milTimeT;
  function timerGo() {
    let milSecValue = Number(ms.value);
    let sValue = Number(s.value);
    let mValue = Number(m.value);
    let hValue = Number(h.value);

    if (mValue >= 0) {
      if (sValue >= 0) {
        console.log(sValue);
        milSecValue = 100;
        ms.value = milSecValue;

        function milTime() {
          if (milSecValue > 0) {
              milTimeT = setTimeout(() => {
              milSecValue = milSecValue - 1;
              ms.value = milSecValue;
              if (milSecValue < 10 && milSecValue >= 0) {
                milSecValue = '0' + milSecValue;
                ms.value = milSecValue;
              }
              milTime();
            }, 10)
          }
        }
        milTime();

          sTime = setTimeout(() => {
          ms.value = milSecValue;
          sValue = sValue - 1;
          s.value = sValue;
          console.log(sValue);

          if (sValue < 10 && sValue >= 0) {
            sValue = '0' + sValue;
            s.value = sValue;
          }
          timerGo();
        }, 1000)
      }
      if (sValue == 0 && mValue > 0) {
        setTimeout(() => {
          s.value = 59;
          mValue = mValue - 1;
          m.value = mValue;

          if (mValue < 10 && mValue >= 0) {
            mValue = '0' + mValue;
            m.value = mValue;
          }
          timerGo();
        }, 1000)
      }
      if (sValue == -1 && mValue == 0) {
        s.value = '0' + 0;
      }
    }
  }

  function timerStop() {
    m.value = '';
    h.value = '';
    ms.value = '';
    s.value = '';
    clearTimeout(sTime);
    clearTimeout(milTimeT);
    m.value = '00';
    h.value = '00';
    ms.value = '00';
    s.value = '00';
  }

  start.addEventListener('click', timerGo);
  dis.addEventListener('click', timerStop);
}
timer();









































//
