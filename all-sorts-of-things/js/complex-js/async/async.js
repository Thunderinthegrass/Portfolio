let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector('.btn');

btn.addEventListener('click', fireworks);




function fireworks() {

  function createElem() {
    let red = Math.round(Math.random(1) * 255);
    let green = Math.round(Math.random(1) * 255);
    let blue = Math.round(Math.random(1) * 255);

    let posLeft = Math.round(Math.random(1) * 90);
    let posTop = Math.round(Math.random(1) * 90);



    let z = document.createElement('div');
    z.classList.add('async-elem');
    wrapper.appendChild(z);
    z.style.left = `${posLeft}%`;
    z.style.top = `${posTop}%`;
    z.style.background = `rgb(${red}, ${green}, ${blue})`;
    // if (red < 255 && green < 255 && blue < 255) {
      // red++;
      // green++;
      // blue++;
    // }
  }

  setInterval(createElem, 1000);


  setTimeout(function() {
    setInterval(function() {
      wrapper.firstChild.remove();
    }, 1000);
  }, 5000)
}


function macrotaskQueue() {

  function hardWork() {//браузер подвисает, пока не выполнится подсчёт
    let i = 0;

    let start = Date.now();

    function count() {

      // делаем тяжёлую работу
      for (let j = 0; j < 1000000000; j++) {
        i++;
      }

      console.log("До миллиарда посчитано за " + (Date.now() - start) + ' миллисекунд');
    }

    count();
  }
  hardWork();

  function hardWorkWithSetTimeout() {//браузер не подвиснет, т.к. каждый миллион итераций счет прерывается и выполняются другие задачи, если они есть, затем снова запускается счёт. Т.к. у setTimeout нулевая звдержка, то он просто вклинивается через миллион итераций, ставя следующую итерацию в очередь.
    let i = 0;

    let start = Date.now();

    function count() {

      // делаем тяжёлую работу
      do {
        i++;
      } while (i % 1000000 != 0);

      if (i == 1000000000) {
        console.log("До миллиарда посчитано за " + (Date.now() - start) + ' миллисекунд');
      }
      else{
        setTimeout(count);
        // console.log(i);
      }
    }

    count();
  }
  hardWorkWithSetTimeout();

  function atFirstSetTimeout() {//в браузере есть минимальная задержка в 4 миллисекунды при множестве вложенных вызовов setTimeout. Даже если мы указываем задержку 0, на самом деле она будет равна 4 мс (или чуть больше). Поэтому чем раньше мы запланируем выполнение – тем быстрее выполнится код. В даннном случае - секунды на 4 быстрее, чем предыдущая функция.
    let counter = document.querySelector('.counter');
    let i = 0;

    let start = Date.now();

    function count() {
      // перенесём планирование очередного вызова в начало
      if (i < 1001000000 - 100000) {
        counter.innerHTML = i;
        setTimeout(count);// запланировать новый вызов
      }

      do {
        i++;
      } while (i % 1000000 != 0);

      if (i == 1000000000) {
        console.log("До миллиарда посчитано за " + (Date.now() - start) + ' миллисекунд');
      }
    }

    count();
  }
  atFirstSetTimeout();


}
macrotaskQueue()
