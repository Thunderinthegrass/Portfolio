let ms = 0;
let s = 0;
let m = 0;
let h = 0;

let milSeconds = document.querySelector('.mil-seconds');
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let btn = document.querySelector('.stopwatch-start-btn');
let stop = document.querySelector('.stop');
//запуск секундомера
btn.onclick = stopwatch;

function stopwatch() {
  btn.classList.toggle('active');

  if (stop.classList.contains('active')) {
    stop.classList.remove('active');
  }

  let start = setInterval(function () {
    ms++;
    milSeconds.innerHTML = ms;
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    // подставляем нули, если число меньше 10
    if (ms < 10) {
      milSeconds.innerHTML = '0' + ms;
    }
    if (s < 10) {
      seconds.innerHTML = '0' + s;
    }
    if (m < 10) {
      minutes.innerHTML = '0' + m;
    }
    if (h < 10) {
      hours.innerHTML = '0' + h;
    }
    //бег цифр
    if (ms == 99) {
      ms = -1;
      s++;
    }
    if (s == 60) {
      s = 0;
      m++;
    }
    if (m == 60) {
      m = 0;
      h++;
    }
  }, 10);
  //остановка секундомера
  stop.onclick = stopwatchStop;
  function stopwatchStop() {
    stop.classList.toggle('active');

    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }

    clearInterval(start);
  }
  //сброс секундомера
  let discharge = document.querySelector('.discharge');

  discharge.addEventListener('click', stopwatchDischarge);

  function stopwatchDischarge() {
    clearInterval(start);

    milSeconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';

    ms = 0
    s = 0;
    m = 0;
    h = 0;

    btn.classList.remove('active');
    stop.classList.remove('active');
  }
}


//ширина контейнера 
const stopwatchCont = document.querySelector('.stopwatch');
const stopwatchItem = document.querySelectorAll('.stopwatch__item');

let stopwatchItemsWidth = 0;
let paddingWidth = 0;

for (let i = 0; i < stopwatchItem.length; i++) {
  let stopwatchItemWidth = stopwatchItem[i].offsetWidth;//получаем ширину .stopwatch__item
  console.log('ширина item ' + stopwatchItemWidth);
  stopwatchItemsWidth += stopwatchItemWidth;//складываем ширину всех .stopwatch__item

  paddingWidth = (stopwatchItemWidth / 4) * (stopwatchItem.length - 1);
}
console.log('общая ширина паддингов ' + paddingWidth);

console.log('общая ширина items ' + stopwatchItemsWidth);
stopwatchCont.style.width = `${stopwatchItemsWidth + paddingWidth}px`; //общая ширина всех item и их паддингов, при добавлении нового item добавляется и паддинг, свойство justify-content: space-between расставляет их в нужном порядке


//timer
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

//   // arrowBtnDown[i].addEventListener('click', () => {
//   //   if (timerItem[i].value > 0) {
//   //     timerItem[i].value = +timerItem[i].value - 1;
//   //     plusZero();
//   //   }
//   // })


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

//     }, 300)

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

//     }, 300)

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





// // let ms = +document.querySelector('.mil-seconds').value;
// // ms = +ms + 1;

// // document.querySelector('.mil-seconds').value = +ms;


// // start.addEventListener('click', () => {//запуск убывания миллисекунд
// //   let ms = +document.querySelector('.mil-seconds').value;
// //   let msDown = setInterval(function () {
// //     document.querySelector('.mil-seconds').value = ms;
// //     console.log(ms);
// //     console.log(typeof ms);
// //     if (ms > 0) {
// //       ms--;
// //     }
// //     else {
// //       clearInterval(msDown);
// //     }

// //   }, 10)

// //   // if (ms == 0) {

// //   //   clearInterval(msDown);
// //   // }

// // })

// let s = document.querySelector('.seconds');
// let m = document.querySelector('.minutes');
// let h = document.querySelector('.hours');


