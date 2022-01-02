//замыкание - это возможность функции, которая находится внутри другой функции, получать достоп к переменным, которые находятся в области видимости родительской функции даже после того, как родительская функция прекратила своё выполнение.
function closuresMinin() {
  function createCalcFunction(n) {
    return function() {
      document.querySelector('.out').innerHTML = 10 * n;
    }
  }
  let z = createCalcFunction(10);
  console.log(z);
  z();

  function multNum(n) {
    return function(num) {
      return n * num;
    }
  }

  const mult = multNum(5);
  document.querySelector('.out-1').innerHTML = mult(50);

  function urlGenerator(domain) {
    return function(url) {
      return function(prot) {
        return `<a href="${prot}${url}.${domain}">${prot}${url}.${domain}</a>`;
      }
    }
  }
  const getUrl = urlGenerator('com');
  let mySite = getUrl('nasachevskyroman');
  const getProt = mySite('https://');
  document.querySelector('.out-2').innerHTML = getProt;
}
// closuresMinin();


function closuresLushenko() {
  function t1() {
    let a = 10;
    return function() {
      a = a * 10;
      return a;
    }
  }

  let z = t1();//z становится анонимной функцией из t1

  let c = t1();

  console.log(c());
  console.log(z());
  console.log(z());
  console.log(c());

  console.log(z());
  console.log(z());
  console.log(c());
  console.log(z());
}
// closuresLushenko();

function vasilyMuravev() {

const externalVar = 'Самая внешняя функция';
  function external() {
    const externalVar = 'Внешняя функция';
    function internal() {
      const internalVar = 'Внутренняя функция';
      console.log('internalVar > ', internalVar);
      console.log('externalVar > ', externalVar);
    }
    return internal;
  }
  let internalFn = external();
  // internalFn();


  function wrapperExample() {

    function createAddress(type) {
      const address = type.toUpperCase();
      return function(name) {
        name = name.toUpperCase();
        return `${address} ${name}`;
      }
    }
    let z = createAddress('мистер');

    console.log(z('чистюля'));

    function player(name) {
      let score = 0;
      return function() {
        score++;
        return `${name} - ${score} баллов`;
      }
    }

    let player1 = player('Фёдор Петров');
    document.querySelector('.out').onclick = function() {
      document.querySelector('.out').innerHTML = player1();
    }
    let player2 = player('Владимир Пнёв');
    document.querySelector('.out-1').onclick = function() {
      document.querySelector('.out-1').innerHTML = player2();
    }
    let player3 = player('Мистер Чистюля');
    document.querySelector('.out-2').onclick = function() {
      document.querySelector('.out-2').innerHTML = player3();
    }
    console.log(player1());
    console.log(player2());
    console.log(player3());
  }
  wrapperExample();
}
vasilyMuravev();























//
