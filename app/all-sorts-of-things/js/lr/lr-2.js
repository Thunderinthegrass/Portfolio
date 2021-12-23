let inp = document.querySelectorAll('.inp');

//1. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку должно выдаваться сообщение "Привет!".

document.querySelector('.btn-1').onclick = () => alert('Привет!')

//2. Создать вэб-страничку с кнопкой "Нажми меня" и полем ввода, содержащим текст "???". При нажатии на кнопку текст в поле ввода должен замениться на "!!!"

document.querySelector('.btn-2').onclick = () => document.querySelector('.out-2').innerHTML = '!!!';

//4. Создать вэб-страничку с кнопкой "Нажми меня" и полем ввода, содержащим число. При нажатии на кнопку вывести сообщение с квадратом введённого числа, если число не введено - сообщить "Ошибка ввода!"

document.querySelector('.btn-4').onclick = () => {
  let out = document.querySelector('.out-4')
  let inp = document.querySelector('.inp-4')
  let z = inp.value;
  console.log(z);
  if(z == '') {
    out.innerHTML = 'Ошибка ввода!';
  }
  else {
    z = +z;
    out.innerHTML = z * z;
  }
}

//5. Создать вэб-страничку с кнопкой "Нажми меня" и двумя полями ввода, содержащими произвольный текст. По нажатию на кнопку тексты в полях ввода должны меняться.
function t5() {
  let inp = document.querySelectorAll('.inp-5')
  document.querySelector('.btn-5').onclick = () => {
    let z = inp[0].value;
    let x = inp[1].value;

    inp[0].value = x;
    inp[1].value = z;
  }
}

t5();


//6. Создать вэб-страничку с кнопкой "Нажми меня". При каждом нажатии в кнопке должно отображаться сколько раз ее нажали.
function t6() {
  let out = document.querySelector('.out-6')
  let btn = document.querySelector('.btn-6')
  let z = 0;
  btn.onclick = () => {
    z++;
    out.innerHTML = `Кнопку нажали ${z} раз`;

    if (z > 5) {
      out.innerHTML = `Понажимал и хватит`;
    }
  }
}

t6();

//8. Создать вэб-страничку с кнопками "Заблокировать" и "Разблокировать" и поле ввода с произвольным тестом. При нажатии на "Заблокировать" должно блокироваться поле для ввода, "Разблокировать" - поле для ввода должно становиться доступным для ввода.

function t8() {
  let btn = document.querySelectorAll('.btn-8')
  let inp = document.querySelector('.inp-8')
  btn[0].onclick = () => {
    if (!(inp.hasAttribute('readonly'))) {
      inp.setAttribute('readonly', true);
      inp.setAttribute('placeholder', 'Заблокировано');
    }
  }
  btn[1].onclick = () => {
    if (inp.hasAttribute('readonly')) {
      inp.removeAttribute('readonly');
      inp.setAttribute('placeholder', 'Снова можно что-нибудь ввести');
    }
  }
}

t8();

//9. Создать вэб-страничку с абзацем (тег P), при клике мышкой должно появиться сообщение.

function t9() {
  let p9 = document.querySelector('.p-9');
  p9.onclick = () => {
    p9.classList.add('active-p')
    p9.innerHTML = 'Нажато';
  }
}

t9();

//10. Так же как и в 9 задаче, сообщение должно появиться при наведении курсора мыши и его убирании в сторону от выделенной области.

function t10() {
  let p10 = document.querySelector('.p-10');
  p10.onmouseover = () => {
    p10.innerHTML = 'Теперь уводите мышку';
  }
  p10.onmouseout = () => {
    p10.innerHTML = 'Мышка уведена';
  }
}

t10();

//11. Создать вэб-страничку с выделенной областью, содержащую картинку и кнопку. При нажатию на кнопку картинка должна меняться.

function t11() {
  let btn = document.querySelector('.btn-11');
  let img = document.querySelector('.img-11');
  let count = 1;
  btn.onclick = () => {
    count++;
    console.log('vvv');
    img.setAttribute('src', `img/${count}.jpg`);
    if (count == 4) {
      count = 0;
    }
  }
}

t11();

//12. Создать вэб-страничку с полем ввода, содержащим произвольный текст. При нажатии на поле ввода должно выводится сообщение с текстом поля ввода. (использование this)

function t12() {
  let inp = document.querySelector('.inp-12');
  let out = document.querySelector('.out-12');
  inp.value = 'ggggggggggggggggggg';

  inp.onclick = function() {
    out.innerHTML = this.value;
  }
}

t12();

//13. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку текст меняется на "Меня больше не нажать" и кнопка должна заблокироваться. (this)

function t13() {
  let btn = document.querySelector('.btn-13');
  let count = 1;
  btn.onclick = function() {
    if (count > 0) {
      this.innerHTML = 'Меня больше не нажать';
      count = 0;
    }
  }
}

t13();

//14. Создать вэб-страничку с кнопкой "Нажми меня" и полем тега SPAN с произвольным текстом. При нажатии на кнопку текст должен стать "жирным" (тег B). (Знание outerHTML,  innerHTML)

function t14() {
  let btn = document.querySelector('.btn-14');
  let out = document.querySelector('.out-14');

  btn.onclick = () => {
    let z = out.outerHTML;
    out.innerHTML = `<b>${z}</b>`;
  }
}

t14();

//15. Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в коде (создать кнопку с событием).

// <h2>Заголовок, не поменяется.</h2>
// <p>Абзац, поменяется.</p>
// <p>Абзац, поменяется.</p>
// <p>Абзац, поменяется.</p>
//
// код должен стать:
// <h2>Заголовок, не поменяется.</h2>
// <p>1</p>
// <p>2</p>
// <p>3</p>
// <input type="submit" onclick="func()">

function t15() {
  let btn = document.querySelector('.btn-15');
  let p15 = document.querySelectorAll('.p-15');

  btn.onclick = function() {
    for (let i = 0; i < p15.length; i++) {
      p15[i].innerHTML = i + 1;
    }
  }
}

t15();

//16. Дан HTML код. Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде (создайте кнопку).

// <h2 class="zzz">Заголовок с классом zzz.</h2>
// <p class="zzz">Абзац с классом zzz.</p>
// <p class="zzz">Абзац с классом zzz.</p>
// <p>Просто абзац, не поменяется.</p>
//
// HTML код станет выглядеть так:
//
// <h2 class="zzz">1</h2>
// <p class="zzz">2</p>
// <p class="zzz">3</p>
// <p class="zzz">4</p>
// <p>Просто абзац, не поменяется.</p>
// <input type="submit" onclick="func()">

function t16() {
  let btn = document.querySelector('.btn-16');
  let zzz = document.querySelectorAll('.zzz');

  btn.onclick = function() {
    for (let i = 0; i < zzz.length; i++) {
      zzz[i].innerHTML = i + 1;
    }
  }
}

t16();

//17. Дан HTML код. Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.

// <h2 class="zzz">Заголовок с классом zzz, не поменяется.</h2>
// <p class="zzz">Абзац с классом zzz.</p>
// <p class="zzz">Абзац с классом zzz.</p>
// <p>Просто абзац, не поменяется.</p>
//
// HTML код станет выглядеть так:
//
// <h2 class="zzz">Заголовок с классом zzz, не поменяется.</h2>
// <p class="zzz">1</p>
// <p class="zzz">2</p>
// <p class="zzz">3</p>
// <p>Просто абзац, не поменяется.</p>
// <input type="submit" onclick="func()">

function t17() {
  let btn = document.querySelector('.btn-17');
  let task17 = document.querySelector('.task-17');
  let zzz = task17.querySelectorAll('.zzz');

  btn.onclick = function() {
    for (let i = 0; i < zzz.length; i++) {
      zzz[i].innerHTML = i + 1;
    }
  }
}

t17();

//18. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку выводится текущие день, месяц и год в формате 'год-месяц-день'. (вам понадобятся следующие методы объекта Date: getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds.)

function t18() {
  let btn = document.querySelector('.btn-18');
  let out = document.querySelector('.out-18');

  btn.onclick = function() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    out.innerHTML = `${year}-${month + 1}-${day}`;
  }
}

t18();

//19. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку выводится текущий месяц по-русски.

function t19() {
  let btn = document.querySelector('.btn-19');
  let out = document.querySelector('.out-19');
  let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",]

  btn.onclick = function() {
    let date = new Date();
    let month = date.getMonth();
    out.innerHTML = months[month];
  }
}

t19();

//20. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку выводится сообщение - текущее время и дата в формате '12:59:59 31.01.2021'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.1.2021 сделает 01.01.2021)

function t20() {
  let btn = document.querySelector('.btn-20');
  let out = document.querySelector('.out-20');

  btn.onclick = function() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    month = month + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    year = String(year);
    month = String(month);
    day = String(day);
    hour = String(hour);
    minutes = String(minutes);
    seconds = String(seconds);

    if (month.length == 1) {
      month = `0${month}`;
    }
    if (day.length == 1) {
      day = `0${day}`;
    }
    if (hour.length == 1) {
      hour = `0${hour}`;
    }
    if (minutes.length == 1) {
      minutes = `0${minutes}`;
    }
    if (seconds.length == 1) {
      seconds = `0${seconds}`;
    }
    out.innerHTML = `${day}-${month}-${year} ${hour}-${minutes}-${seconds}`;
  }
}

t20();

//21. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку выводится сообщение - номер текущего дня недели. (метод getDay)

function t21() {
  let btn = document.querySelector('.btn-21');
  let out = document.querySelector('.out-21');

  btn.onclick = function() {
    let date = new Date();
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }
    out.innerHTML = day;
  }
}

t21();

//22. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку выводится сообщение - Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.

function t22() {
  let btn = document.querySelector('.btn-22');
  let out = document.querySelector('.out-22');

  btn.onclick = function() {
    let z = Date.parse('Mar 1, 1988');
    out.innerHTML = (z / 60) / 60;
    }
  }

t22();

//23. Создать вэб-страничку с кнопкой "Нажми меня". При нажатии на кнопку выводится сообщение - количество секунд, которое осталось до конца дня.

function t23() {
  let btn = document.querySelector('.btn-23');
  let out = document.querySelector('.out-23');

  btn.onclick = function() {
    let date = new Date();
    let dateNext = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    let differ = dateNext - date;
    out.innerHTML = Math.round(differ / 1000);
    }
  }

t23();

//24. Создать вэб-страничку с тикающими часами.

function clock() {
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');

  setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  })
}
clock();

//25. Создать вэб-страничку со слайдером - циклично меняющимися картинками, не менее трех.

function t25() {
  let img = document.querySelector('.img-25');
  let count = 1;
  setInterval(() => {
    count++;
    img.setAttribute('src', `img/${count}.jpg`);
    if (count == 4) {
      count = 0;
    }
  }, 2000);
}

t25();

//26. Создать "карусель" картинок - три картинки подряд в одну линию, каждую секунду последовательно меняющиеся местами. (smiley)(sad)(wink) >(sad)(wink)(smiley)>(wink)(smiley)(sad)>(smiley)(sad)(wink)

function t26() {
  let img1 = document.querySelector('.img-26-1');
  let img2 = document.querySelector('.img-26-2');
  let img3 = document.querySelector('.img-26-3');
  let img4 = document.querySelector('.img-26-4');

    function z1() {
      let count = 0;
      setInterval(() => {
        count++;
        img1.setAttribute('src', `img/${count}.jpg`);
        if (count == 4) {
          count = 0;
        }
      }, 1000);
    }
    z1();
    function z2() {
      let count = 0;
      setTimeout(() => {
        setInterval(() => {
          count++;
          img2.setAttribute('src', `img/${count}.jpg`);
          if (count == 4) {
            count = 0;
          }
        }, 1000);
      }, 1000)
    }
    z2();
    function z3() {
      let count = 0;
      setTimeout(() => {
        setInterval(() => {
          count++;
          img3.setAttribute('src', `img/${count}.jpg`);
          if (count == 4) {
            count = 0;
          }
        }, 1000);
      }, 2000)
    }
    z3();
    function z4() {
      let count = 0;
      setTimeout(() => {
        setInterval(() => {
          count++;
          img4.setAttribute('src', `img/${count}.jpg`);
          if (count == 4) {
            count = 0;
          }
        }, 1000);
      }, 3000)
    }
    z4();
  }


t26();

//27. Создать вэб-страничку с отсчетом до полуночи сегодняшнего дня. (в произвольной форме)

function t27() {
  setInterval(() => {
    let out = document.querySelector('.out-27');
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    let z =  Math.round(diff / 1000);
    out.innerHTML = z;
  }, 1000);
}

t27();

//28. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src. (elem.onclick)

function t28() {
  let img = document.querySelectorAll('.img-28')
  img.forEach((item, i) => {
    item.addEventListener('click', () => {
      alert(item.getAttribute('src'));
      console.log('src');
    })
  });

}

t28();

//задачки на На addEventListener, removeEventListener:

//29. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.

function t29() {
  let link = document.querySelectorAll('.link-29')
  link.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
      let href = item.getAttribute('href');
      item.setAttribute('title', href);
    })
  });

}

t29();

//30. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках

function t30() {
  let link = document.querySelectorAll('.link-30')
  link.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
      let href = item.getAttribute('href');
      item.innerHTML += `(${href})`;
    })
  });

}

t30();

// 31. Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста

function t31() {

  };

t31();

// 32. Привяжите всем полям ввода следующее событие - по потери фокуса каждое поле ввода выводит свое value в абзац с id="test".

function t32() {
  let out = document.querySelector('.out-32');
  let inp = document.querySelectorAll('.inp-32');

  inp.forEach((item, i) => {
    item.addEventListener('mouseout', () => {
      out.innerHTML = item.getAttribute('value');
    })
  });

};

t32();

// 33. Для всех полей ввода сделайте так, чтобы они выводили свой value сообщением при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на поле ввода не должно вызывать реакции.

function t33() {
  let out = document.querySelector('.out-33');
  let inp = document.querySelectorAll('.inp-33');

  inp.forEach((item, i) => {
    item.addEventListener('click', () => {
      out.innerHTML = item.getAttribute('value');
      item.removeAttribute('value');
    })
  });

};

t33();

// 34. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

function t34() {
  let out = document.querySelectorAll('.out-34');

  out.forEach((item, i) => {
    item.addEventListener('click', () => {
      let z = item.innerHTML;
      z = z * z;
      item.innerHTML = z;
    })
  });

};

t34();

// 35. Даны поля ввода (3). Сделайте так, чтобы все поля ввода по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в поле, указывается в атрибуте data-length. Если вбито правильное количество, то граница поля становится зеленой, если неправильное - красной.

function t35() {
  let inp = document.querySelectorAll('.inp-35');

  inp.forEach((item, i) => {
    item.addEventListener('mouseout', () => {
      let z = item.getAttribute('data-length');
      let v = item.value.length;

      if (z == v) {
        item.style.border = '3px solid green';
      }
      else {
        item.style.border = '3px solid red';
      }
    })
  });

};

t35();

// 36. Даны несколько тегов DIV. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener

function t36() {
  let out = document.querySelectorAll('.out-36');

  out.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.add('red');
      if (item.classList.contains('red') == true) {
        item.removeEventListener('click', () => {
          item.classList.add('red');
        })
        console.log('z');
        item.addEventListener('click', () => {
          item.classList.add('green');
        })
      }
      if (item.classList.contains('green') == true) {
        item.removeEventListener('click', () => {
          item.classList.add('green');
        })
        console.log('z');
        item.addEventListener('click', () => {
          item.classList.add('red');
        })
      }
    })
});

};

t36();

// задачи с классами:

// Для решения задач данного блока вам понадобятся следующие свойства: classList.
// 37. Дан элемент #elem. Добавьте ему класс www.
// 38. Дан элемент #elem. Удалите у него класс www.
// 39. Дан элемент #elem. Проверьте наличие у него класса www.
// 40. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
// 41. Дан элемент #elem. Узнайте количество его классов.
// 42. Дан элемент #elem. Выведите последовательно сообщением его классы.

function t3742() {
  let elem = document.querySelector('#elem');
  let out = document.querySelector('.out-37');

  elem.classList.add('www');
  elem.classList.remove('www');
  elem.classList.contains('www');
  if (elem.classList.contains('www')) {
    elem.classList.remove('www');
  }
  else {
    elem.classList.add('www');
  }
  let z = elem.classList.length;
  for (let i = 0; i < z; i++) {
    out.innerHTML += elem.classList[i];
  }

};

t3742();

// задачи на работу с CSS:
// вам понадобятся следующие свойства: cssText
// 43. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.

function t43() {
  let out = document.querySelector('.out-43');
  out.style.cssText = 'background-color: red; width: 30px; height: 30px; border: 3px solid #ffffff';
};

t43();

// теперь на tagName:
// 44. Дан элемент #elem. По клику на него выведите название его тега.

function t44() {
  let out = document.querySelector('.out-44');
  out.onclick = function() {
    out.innerHTML = out.tagName;
  }
};

t44();
// 45. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.

function t45() {
  let out = document.querySelector('.out-45');
  out.onclick = function() {
    out.innerHTML = out.tagName.toLowerCase();
  }
};

t45();

// 46. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.

function t46() {
  let www = document.querySelectorAll('.www46');
  www.forEach((item, i) => {
      item.innerHTML += item.tagName.toLowerCase();
  });
};

t46();

// Вставка элементов через appendChild. Для решения задач данного блока вам понадобятся следующие методы: createElement, appendChild.
// 47. Дан ol. Вставьте ему в конец li с текстом 'пункт'.

function t47() {
  let ol = document.querySelector('.out-47');
  let z = document.createElement('li');
  z.innerHTML = 'Пункт';
  ol.appendChild(z);
};

let btn47 = document.querySelector('.btn-47').onclick = t47;

// 48. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

function t48() {
  let out = document.querySelector('.out-48');
  let z = ['десять', 'Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят'];
  let btn = document.querySelector('.btn-48');

  btn.onclick = function() {
    for (let i = 0; i < z.length; i++) {
      let x = document.createElement('li');
      x.classList.add(`li-${i}`);
      x.innerHTML = z[i];
      out.appendChild(x);
    }
  }
};

t48();

// Потомки. Для решения задач данного блока вам понадобятся следующие свойства: firstElementChild, lastElementChild, children.

// 49. Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

function t49() {
  let out = document.querySelector('.out-49');
  let btn = document.querySelector('.btn-49');
  let task = document.querySelector('.task-49');

  btn.onclick = () => {
    task.firstElementChild.classList.add('red');
  }
};

t49();

// 50. Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

function t50() {
  let out = document.querySelector('.out-50');
  let btn = document.querySelector('.btn-50');
  let task = document.querySelector('.task-50');

  btn.onclick = () => {
    task.lastElementChild.classList.add('text-red');
  }
};

t50();

// 51. Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

function t51() {
  let out = document.querySelector('.out-51');
  let btn = document.querySelector('.btn-51');
  let task = document.querySelector('.task-51');

  btn.onclick = () => {
    for (let i = 0; i < task.children.length; i++) {
      task.children[i].innerHTML += '!';
    }
  }
};

t51();

// Соседи. Для решения задач данного блока вам понадобятся следующие свойства: previousElementSibling, nextElementSibling.
// 52. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

function t52() {
  let out = document.querySelector('.out-52');
  let btn = document.querySelector('.btn-52');
  let task = document.querySelector('.task-52');

  btn.onclick = () => {
    btn.previousElementSibling.innerHTML += '!';
  }
};

t52();

// 53. Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.

function t53() {
  let out = document.querySelector('.out-53');
  let btn = document.querySelector('.btn-53');
  let task = document.querySelector('.task-53');

  btn.onclick = () => {
    btn.nextElementSibling.innerHTML += '!';
  }
};

t53();

// 54. Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

function t54() {
  let out = document.querySelector('.out-54');
  let btn = document.querySelector('.btn-54');
  let task = document.querySelector('.task-54');

  btn.onclick = () => {
    let z = btn.nextElementSibling;
    z.nextElementSibling.innerHTML += '!';
  }
};

t54();

// Родители. Для решения задач данного блока вам понадобятся следующие свойства: parentElement, parentNode.
// 55. Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

function t55() {
  let out = document.querySelector('.out-55');
  let btn = document.querySelector('.btn-55');
  let task = document.querySelector('.task-55');

  btn.onclick = () => {
    btn.parentElement.classList.add('red');
  }
};

t55();

// 56. Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

function t56() {
  let out = document.querySelector('.out-56');
  let btn = document.querySelector('.btn-56');
  let task = document.querySelector('.task-56');

  btn.onclick = () => {
    let z = btn.parentElement;
    z.parentElement.classList.add('red');
  }
};

t56();

// метрики windows
// 57. Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера.

function t57() {
  let out = document.querySelector('.out-57');
  let btn = document.querySelector('.btn-57');

  btn.onclick = () => {
    out.innerHTML = document.documentElement.clientHeight;
  }
};

t57();

// 58. Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа.

function t58() {
  let btn = document.querySelector('.btn-58');

  btn.onclick = () => {
     let z = window.innerHeight;
	   window.scrollBy(0, z);
  }
};

t58();

// 59. Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.

function t59() {
  let btn = document.querySelector('.btn-59');
  let out = document.querySelector('.out-59');

  btn.onclick = () => {
     let z = window.pageYOffset;
     if (z) {
       out.innerHTML = 'Прокрутка есть';
     }
     else {
       out.innerHTML = 'Прокрутки нет';
     }
  }
};

t59();

// объект Event
// 60. Есть поле ввода. ниже расположен текст. при вводе символа в поле ввода он добавляется к тексту

function t60(e) {
  let out = document.querySelector('.out-60');
  let inp = document.querySelector('.inp-60');

  inp.oninput = () => {
    inp.oninput = function() {
    out.innerHTML = inp.value;
  };
  }
};

t60();

// 61. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl

function t61() {
  let btn = document.querySelector('.btn-61');

  btn.onclick = (e) => {
    if (e.ctrlKey) {
      btn.classList.toggle('red');
    }
  }
};

t61();

// 62. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'

function t62() {
  let btn = document.querySelector('.btn-62');
  let out = document.querySelector('.out-62');

  btn.onclick = (e) => {
    if (e.ctrlKey) {
      out.innerHTML = 1;
    }
    else if (e.altKey) {
      out.innerHTML = 2;
    }
  }
};

t62()
