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
//переменной d присваивается числовое значение, запрошенное у пользователя, а затем выводит на экран 1) это значение 2)квадрат этого значения 3) куб этого значения. Пример: Ввели 2, получили 2,4,8..

//способ первый
btn[0].onclick = () => {

  let d = inp[0].value;

  let z = Math.pow(d, 2);
  let x = Math.pow(d, 3);

  if (d == '') {
    alert('ВЫ НЕ ВВЕЛИ ЧИСЛО!!!!!!!!!!!!!!!!!!!!!!!')
  }
  else {
    out[0].innerHTML = `вы ввели число ${d},<br>квадрат ${d} = ${z},<br> куб ${d} = ${x}<br>`;
  }
}

//Task 2
// Сделать веб-страничку, в которой некоторой переменной присваивается произвольное значение, например 9, а затем выводится на экран сообщение "Переменная равна 9. Переменная в квадрате равна 81".
function t2() {
  let v = inp[1].value;
  v = Math.pow(v, 2);
  return `Переменная в квадрате равна ${v}`;
}

btn[1].onclick = () => {
  out[1].innerHTML = t2();
}

//Task 3
// Сделать вэб-страничку, в которой двум переменным пользователь присвоит числовые значения, а затем выведет на экран с поясняющей надписью - произведение этих переменных, потом сумму этих переменных. Например, "Произведение 2 и 3 равно 6. Сумма 2 и 3 равно 5".
btn[2].onclick = function t3() {
  let a = inp[2].value;
  let b = inp[3].value;

  let p = +a + +b;
  let s = a * b;
  out[2].innerHTML = `Сумма ${a} и ${b} = ${p}, <br>  Произведение ${a} и ${b} = ${s}`;
}

//Task 4
// Дан диаметр окружности d. Найти ее длину L = јўd. В качестве
// значения ј использовать 3.14.
btn[3].onclick = function t4() {
  let inp4 = document.querySelectorAll('.inp-4')
  let a = inp4[0].value;
  let b = inp4[1].value;
  let z = Math.pow(a, 2);
  let x = Math.pow(b, 2);
  let y = z + x;

  out[3].innerHTML = `Введено ${a} и ${b}. Квадрат ${a} = ${z}, квадрат ${b} = ${x}, сумма квадратов равна ${y}`;
}

//Task 5
// Сделать вэб-страничку, в которой пользователь вводит с клавиатуры два числа - год рождения ученика и текущий год. Программа должна вывести с поясняющей строкой возраст ученика. Пример: "Введено 2006, 2021. Вам 15 лет." Это задачи на alert, promt, comfirm

btn[4].onclick = function () {
  let a = prompt('Введите ваш год рождения');
  let b = prompt('Введите текущий год');
  confirm(`вам ${b - a} лет?`);
  alert('Всё понятно');
}

//Task 6
//Сделать страничку, в которой пользователь вводит целое число. Если оно положительное, вывести его увеличенным в два раза. Отрицательное уменьшить в два раза. Пример: "Введено 5. 5 - положительное. Результат равен 10", "Введено -5. -5 - отрицательное. Результат равен -2.5".

btn[5].onclick = function () {
  let inp6 = document.querySelector('.inp-6')
  let a = inp6.value;
  console.log(a);
  a = Number(a);
  let out6 = document.querySelector('.out-6');

  if (a > 0) {
    let z = a * 2;
    out6.innerHTML = `Введено ${a} - положительное. Результат равен ${z}`;
  }
  else if (a < 0) {
    let x = a / 2;
    out6.innerHTML = `Введено ${a} - отрицательное. Результат равен ${x}`;
  }
}

//Task 7
//Сделать страничку, в которой пользователь вводит целое число, если число равно нулю, то должно вывести сообщение "ноль" Пример - введено число 0 - вывод "ноль".
btn[6].onclick = function () {
  let inp7 = document.querySelector('.inp-7')
  let a = inp7.value;
  a = Number(a);
  let out7 = document.querySelector('.out-7');

  if (a == 0) {
    out7.innerHTML = `Ноль`;
  }
  else {
    out7.innerHTML = `Не ноль`;
  }
}

//Task8
//Сделать веб-страничку, в которой пользователь вводит с клавиатуры два числа. Если первое больше второго, то выводит на экран их сумму, если наоборот - их произведение. Если числа одинаковые, то сообщение "Числа одинаковые". Пример вывода: "Введено 2 и 1. 2>1. Результат равен 3."

btn[7].onclick = function () {
  let inp8 = document.querySelectorAll('.inp-8')
  let a = inp8[0].value;
  let b = inp8[1].value;
  a = Number(a);
  b = Number(b);
  let out8 = document.querySelector('.out-8');

  if (a > b) {
    out8.innerHTML = `Введено ${a} и ${b}. ${a} > ${b}, их сумма = ${a + b}`;
  }
  else if (a < b) {
    out8.innerHTML = `Введено ${a} и ${b}. ${a} < ${b}; их произведение = ${a * b}`;
  }
  else {
    out8.innerHTML = `Введено ${a} и ${b}. ${a} = ${b}`;
  }
}

//Task9
//Сделать вtб-страничку, в которой пользователь вводит с клавиатуры два числа. Если первое и второе число имеют один знак (+ или -), то вывести "один знак", иначе "разные знаки", если оба числа равны 0, тогда вывести "некорректно".

btn[8].onclick = function () {
  let inp9 = document.querySelectorAll('.inp-9')
  let a = inp9[0].value;
  let b = inp9[1].value;
  a = Number(a);
  b = Number(b);
  let out9 = document.querySelector('.out-9');

  if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
    out9.innerHTML = `Один знак`;
  }
  else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    out9.innerHTML = `Два знака`;
  }
  else {
    out9.innerHTML = `Некорректно`;
  }
}

//Task 10
//Сделать веб-страничку, в которой пользователь вводит с клавиатуры два числа. Первое - числитель дроби, второе - знаменатель. Предусмотреть реакцию скрипта, при вводе знаменателя равного 0. В выводе сообщить, какая дробь введена - правильная или неправильная. Пример: "Введено 14/2. Дробь неправильная"

btn[10].onclick = function () {
  let inp11 = document.querySelectorAll('.inp-11')
  let a = inp11[0].value;
  let b = inp11[1].value;
  let c = inp11[2].value;

  a = Number(a);
  b = Number(b);
  c = Number(c);
  let out11 = document.querySelector('.out-11');

  let z = Math.pow(b, 2) + (4 * a * c);
  let zOut = `Введено ${a}, ${b}, ${c}, `;

  if (z < 0) {
    out11.innerHTML = `${zOut} корней нет`;
  }
  else if (z == 0) {
    out11.innerHTML = `${zOut} есть один корень`;
  }
  else (
    out11.innerHTML = `${zOut} есть два различных корня`
  )
}

//Task 12

//Сделать веб-страничку, в которой пользователь вводит с клавиатуры два числа. Вывести эти два числа сначала в порядке возрастания, потом в порядке убывания.

btn[11].onclick = function () {
  let inp12 = document.querySelectorAll('.inp-12')
  let a = inp12[0].value;
  let b = inp12[1].value;
  a = Number(a);
  b = Number(b);
  let out12 = document.querySelector('.out-12');

    out12.innerHTML += `${a}; ${b} <br>`;

    out12.innerHTML += `${b}; ${a}`;
}

//Task 13

//Сделать веб-страничку, в которой пользователь вводит с клавиатуры три числа. Первые два - катеты, третье гипотенуза. Скрипт должен определить, правильно ли введена гипотенуза. Пример: "Введено 5, 4, 6 - длина гипотенузы не соответствует длине катетов."

btn[12].onclick = function () {
  let inp13 = document.querySelectorAll('.inp-13')
  let a = inp13[0].value;
  let b = inp13[1].value;
  let c = inp13[2].value;

  a = Number(a);
  b = Number(b);
  c = Number(c);

  let k1 = Math.pow(a, 2);
  let k2 = Math.pow(b, 2);
  let sum = k1 + k2;
  let out13 = document.querySelector('.out-13');

  if (sum == c) {
    out13.innerHTML = `Введено ${a}, ${b}, ${c}, длина гипотенузы соответствует длине катетов`;
  }
  else {
    out13.innerHTML = `Введено ${a}, ${b}, ${c}, длина гипотенузы не соответствует длине катетов`;
  }
}

//Task14
//Сделать веб-страничку, в которой пользователь вводит с клавиатуры два числа. Первое - количество учеников, второе - парт. Проверить, всем ли ученикам хватает парт, исходя из того, что за партой может сидеть два ученика. Пример: "Введено 22 и 6. Парт не хватает."

btn[13].onclick = function () {
  let inp14 = document.querySelectorAll('.inp-14')
  let a = inp14[0].value;
  let b = inp14[1].value;
  a = Number(a);
  b = Number(b);
  let out14 = document.querySelector('.out-14');
  out14.innerHTML = '';

  if ((a / b) >= 2) {
    out14.innerHTML += `Введено ${a} и ${b} <br>
    парт хватает`;
  }
  else (out14.innerHTML += `Введено ${a} и ${b} <br>
  парт не хватает`);
}

//Task15

//Сделать веб-страничку, в которой пользователь вводит с клавиатуры два числа - коэффициенты линейного уравнения ax+b = 0. Скрип должен сообщить решение. Пример: "Введено 0 и 0. Уравнение имеет бесконечное число корней."

btn[14].onclick = function () {
  let inp15 = document.querySelectorAll('.inp-15')
  let a = inp15[0].value;
  let b = inp15[1].value;
  a = Number(a);
  b = Number(b);
  let out15 = document.querySelector('.out-15');
  out15.innerHTML = '';

  if (a != 0) {
    out15.innerHTML += `Введено ${a} и ${b} <br>
    уравнение имеет одно решение`;
  }
  else if ((a == 0) && (b != 0)) {
    out15.innerHTML += `Введено ${a} и ${b} <br>
  уравнение имеет бесконечное множество решений`
}
  else if ((a == 0) && (b == 0)) {
    out15.innerHTML += `Введено ${a} и ${b} <br>
  уравнение не имеет решений`};
}

//Task15

//Сделать веб-страничку, в которой пользователь вводит с клавиатуры три числа - длины сторон треугольника. Проверить, может ли такой треугольник существовать. Пример: "Введено 1, 1, 2. Такой треугольник не существует"

btn[15].onclick = function () {
  let inp16 = document.querySelectorAll('.inp-16')
  let a = inp16[0].value;
  let b = inp16[1].value;
  let c = inp16[2].value;

  a = Number(a);
  b = Number(b);
  c = Number(c);

  let out16 = document.querySelector('.out-16');

  if ((a + b) > c && (b + c) > a && (c + a) > b) {
    out16.innerHTML = `Введено ${a}, ${b}, ${c}, такой треугольник может существовать`;
  }
  else {
    out16.innerHTML = `Введено ${a}, ${b}, ${c}, такой треугольник не может существовать`;
  }
}

//Task 17

//Сделать веб-страничку, в которой пользователь вводит с клавиатуры три числа - углы треугольника. Сообщить вид треугольника. Пример "Введено 60, 160, 60. Ошибка, такого быть не может."

btn[16].onclick = function () {
  let inp17 = document.querySelectorAll('.inp-17')
  let a = inp17[0].value;
  let b = inp17[1].value;
  let c = inp17[2].value;

  a = Number(a);
  b = Number(b);
  c = Number(c);

  let out17 = document.querySelector('.out-17');

  if ((a + b + c) == 180) {
    out17.innerHTML = `Введено ${a}, ${b}, ${c}, такой треугольник может существовать`;
  }
  else {
    out17.innerHTML = `Введено ${a}, ${b}, ${c}, такой треугольник не может существовать`;
  }
}

//Task 18

//Сделать веб-страничку, в которой пользователь вводит с клавиатуры одно число - час суток. Скрипт должен вывести ту часть дня, к которому принадлежит этот час. Утро 6-9 часов, день 10-17, вечер 18-22, ночь 23-5 часов. Если число больше  23 - сообщить об ошибке.

btn[17].onclick = function () {
  let inp18 = document.querySelector('.inp-18')
  let a = inp18.value;

  a = Number(a);

  let out18 = document.querySelector('.out-18');

  if ((a >= 6) && (a <= 9)) {
    out18.innerHTML = `Утро`;
  }
  else if ((a >= 10) && (a <= 17)) {
    out18.innerHTML = `День`;
  }
  else if ((a >= 18) && (a <= 22)) {
    out18.innerHTML = `Вечер`;
  }
  else if ((a == 23) || ((a >= 0) && (a <= 5))) {
    out18.innerHTML = `Ночь`;
  }
  else if (a == 24) {
    out18.innerHTML = `Ошибка`;
  }
}

//Task 19

//Сделать веб-страничку, которое выводит случайное число из диапазона от 0 до 100.

btn[19].onclick = function () {
  let a = Math.floor(Math.random(1) * 101);
  let out20 = document.querySelector('.out-20');
  out20.innerHTML = a;
}



















































































































//
