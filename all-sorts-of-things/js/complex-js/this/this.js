let body = document.body;
let wrapper = document.querySelector('.wrapper');
let out1 = document.createElement('div');
out1.classList.add('out-1');
wrapper.appendChild(out1);

let out2 = document.createElement('div');
out2.classList.add('out-2');
wrapper.appendChild(out2);
//Minin====================================================
// function hello() {
//   console.log('hello', this);
// }
// hello();
// const person = {
//   name: 'Владимир',
//   age: 78,
//   helloStepa: hello,
//   helloWindow: hello.bind(document),//меняет контекст на указанный
//   logInfo: function(job, surname) {
//     console.group(`информация о гражданине по имени ${this.name}`)
//     console.log(`Имя гражданина ${this.name}`);
//     console.log(`Фамилия гражданина ${surname}`);
//     console.log(`Возраст гражданина ${this.age}`);
//     console.log(`Профессия гражданина ${job}`);
//     console.groupEnd();
//   }
// }
// // console.log(this === window);//true
//
// const fedor = {
//   name: 'Фёдор',
//   age: 73,
//   // logInfo: function() {
//     // console.log(`Имя гражданина ${this.name}`);
//     // console.log(`Возраст гражданина ${this.age}`);
//   // }
// }
// person.logInfo('гайкокрут', 'Петров');
// // person.logInfo.bind(fedor)('водитель кобылы', 'Пнёв');//bind возвращает новую функцию, которую можно сразу же вызвать, или вызвать потом
// // person.logInfo.call(fedor, 'водитель кобылы', 'Пнёв');//call задает контекст, параметры, которых может быть много, и сразу же эту функцию вызывает
// person.logInfo.apply(fedor, ['водитель кобылы', 'Пнёв']);//apply задаёт контекст, принимает только два параметра - контекст и массив с аргументами. call от apply отличается только способом передачи параметров.
//
// const array = [1,2,3,4,5];
//
// //функция умножения каждого элемента на определённое число
// // function multEach(arr, z) {
// //   return arr.map(function(i) {
// //     return i * z;
// //   })
// // }
// //
// // console.log(multEach(array, 8));
//
//
// Array.prototype.multEach = function(z) {
//   return this.map(function(i) {
//     return i * z;
//   })
// }
// console.log(array.multEach(12));


//Lushenko
function colorToggle() {
  this.classList.toggle('red');
}

out1.onclick = colorToggle;
out2.onclick = colorToggle;

document.querySelector('.prof').addEventListener('change', f2);

function f2() {
  document.querySelector('.out-pro').textContent = this.value;
}//если вызвать эту функцию, контекст будет указывать на window

f2.apply(document.querySelector('.prof'));//нужно привызове указывать контекст
//this в функции указывает на элемент, на котором произошло событие, если функция была стрелочной, то this укажет на helloWindow
//стрелочные функции контекста не имеют



























































//
