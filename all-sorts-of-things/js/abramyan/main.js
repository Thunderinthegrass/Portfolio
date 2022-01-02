let inp = document.querySelectorAll('.inp');
let btn = document.querySelectorAll('.btn');
let out = document.querySelectorAll('.out');

let codeWiewBtn = document.querySelectorAll('.code-view-btn');
let codeWrapper = document.querySelectorAll('.code-wrapper');
let pre = document.querySelectorAll('pre');

for (let k = 0; k < codeWiewBtn.length; k++) {

  codeWiewBtn[k].onclick = function viewCode() {

    pre[k].classList.toggle('pre-active');

    if (codeWrapper[k].classList.contains('code-view')) {
      codeWrapper[k].classList.remove('code-view');
      codeWrapper[k].classList.add('code-hide');

      // pre[k].classList.remove('pre');
    }
    else {
      codeWrapper[k].classList.remove('code-hide');
      codeWrapper[k].classList.add('code-view');

      // pre[k].classList.add('pre');
    }



    if (codeWrapper[k].classList.contains('code-view')) {
      codeWiewBtn[k].textContent = 'Скрыть код';
    }
    else {
      codeWiewBtn[k].textContent = 'Показать код';
    }
  }
}

//Task 1
//Дано расстояние L в сантиметрах. Используя операцию деления нацело, найти количество полных метров в нем (1 метр = 100 см).

//способ первый
btn[0].onclick = () => {
  let v = inp[0].value;
  let a = Math.floor(v / 100);
  out[0].innerHTML = 'В ' + v + ' сантиметрах ' + a + ' полных метров';
}


//способ второй
function t1(val) {
  let v = inp[0].value;
  return `В ${v} сантиметрах ${(val - val % 100) / 100} полных метра(ов)`
}

btn[0].onclick = () => {
  let v = inp[0].value;
  out[0].innerHTML = t1(v);
}

//Task 2
// Дана сторона квадрата a. Найти его площадь S = a2.
function t2() {
  let v = inp[1].value;
  v = v * v;
  return `Площадь квадрата равна ${v}`;
}

btn[1].onclick = () => {
  out[1].innerHTML = t2();
}

//Task 3
// Даны стороны прямоугольника a и b. Найти его площадь S = axb и
// периметр P = 2x(a + b).
btn[2].onclick = function t3() {
  let a = inp[2].value;
  let b = inp[3].value;

  let s = a * b;
  let p = 2 * (a + b);
  out[2].innerHTML = `Площадь прямоугольника ${s} <br> Периметр прямоугольника ${p}`;
}

//Task 4
// Дан диаметр окружности d. Найти ее длину L = јўd. В качестве
// значения ј использовать 3.14.
btn[3].onclick = function t4() {
  let d = inp[4].value;
  let l = 3.14 * d;
  out[3].innerHTML = `Длина окружности равна ${l}`;
}
