// change language
let changeLanguage = document.querySelector('.change__language');
let contentLangEn = [
  'наверх',
  'главная',
  'портфолио',
  'обо мне',
  'выключить глаз',
  'роман насачевский',
  'верстальщик',
  'роман насачевский',
  'верстальщик',
  'портфолио',
  'обо мне',
  'Стек веб-технологий',
  'CSS-анимация',
  'Кроссбраузерная, адаптивная вёрстка',
  'БЭМ-методология',
  'Контакты',
  'Напиcать мне',
  'Имя*',
  'Сообщение',
  'Отправить',
];

let contentLangRu = [
  'up',
  'home',
  'portfolio',
  'about me',
  'turn off the eye',
  'roman nasachevsky',
  'layout designer',
  'roman nasachevsky',
  'layout designer',
  'portfolio',
  'about me',
  'Web technology stack',
  'CSS animation',
  'Cross-browser, responsive layout',
  'BEM methodology',
  'Contacts',
  'Write me',
  'Name*',
  'Massage',
  'Send',
];

let contentItem = document.querySelectorAll('._lang');

changeLanguage.onclick = () => {
  for (let k = 0; k < contentItem.length; k++) {
    if (changeLanguage.checked) {
      contentItem[k].textContent = contentLangEn[k];
    }
    else {
      contentItem[k].textContent = contentLangRu[k];
    }
  }
}
//eye
let eyeSwitch = document.querySelector('.eye-switch');

eyeSwitch.onclick = function () {
  let eye = document.querySelector('.eye');
  if (eyeSwitch.checked) {
    eye.classList.remove('eye-red');
  }
  else {
    eye.classList.add('eye-red');
  }
}

//hamburger
let menuBtn = document.querySelector('.menu-btn');
let menuBtnElem = document.querySelector('.menu-btn__elem');
let headerMenu = document.querySelector('.header__menu');
let headerMenuItem = document.querySelectorAll('.header__menu_item');

function menuBtnAnim() {
  menuBtn.classList.toggle('menu-btn--active');
  menuBtnElem.classList.toggle('menu-btn__elem--active');
  headerMenu.classList.toggle('menu--active');
}
menuBtn.addEventListener('click', menuBtnAnim);

//скрываем выпадающее меню после выбора пункта меню
function hiddMenu() {
  let cheskMenuBtnDisplay = window.getComputedStyle(menuBtn).display;//получаем стиль кнопки меню
  if (cheskMenuBtnDisplay === 'block') {//если кнопка не скрыта, убираем выпадающее меню
    menuBtnAnim();
  }
}
for (let i = 0; i < headerMenuItem.length; i++) {
  headerMenuItem[i].addEventListener('click', hiddMenu);
}
// плавный скролл до якоря
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// progress-bar--------------------------------------------

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;

  progress.style.height = per + '%';

}

// back-to-top--------------------------------------------
function btnToTop() {
  let button = $('.btn-totop');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 100) {
      button.fadeIn();
    }
    else {
      button.fadeOut();
    }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({ scrollTop: 0 }, 500);
  })
}

btnToTop();



// scroll animation-------------------------------------------------
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let k = 0; k < animItems.length; k++) {
      const animItem = animItems[k];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }
      else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 100);
  animOnScroll();
}

//form-------------------------------------------------------------
// $(document).ready(function() {

// 	//E-mail Ajax Send
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });
//========================================
"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      } else {
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }

  }


  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  //Функция теста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
// -----------------------------------------
// tuning-----------------
let tuningBtn = document.querySelector('.tuning-btn');
// let blindGear = document.querySelector('.blind-gear');
let tuning = document.querySelector('.tuning');
let zzzzz = 0;

tuningBtn.addEventListener('click', tuningActive);

function tuningActive() {
  tuning.classList.toggle('tuning--active');
  tuningBtn.classList.toggle('tuning-btn--rotate');
}

// color-theme---------------------
let colorThemeInput = document.querySelectorAll('.color-theme-input');
let colorThemeLabel = document.querySelectorAll('.color-theme-label');
let mainColor = document.querySelectorAll('.main--color');
let body = document.querySelector('body');
let headerText = document.querySelector('.header__text');
let bgHead = document.querySelectorAll('.bg--colorful');
let brdrColor = document.querySelectorAll('.brdr--color');

function colorThemeLight() {
  for (let i = 0; i < mainColor.length; i++) {
    if (mainColor[i].classList.contains('main--color-dark') || mainColor[i].classList.contains('main--color-colorful')) {
      mainColor[i].classList.remove('main--color-dark');
      mainColor[i].classList.remove('main--color-colorful');
    }
    mainColor[i].classList.add('main--color-light');
    mainColor[i].style.color = "#383942";
  }
  for (let i = 0; i < bgHead.length; i++) {
    bgHead[i].style.fill = "#383942";
  }
  body.classList.add('main--color-light');
}

function colorThemeDark() {
  gnatsFly();
  for (let i = 0; i < mainColor.length; i++) {
    if (mainColor[i].classList.contains('main--color-light') || mainColor[i].classList.contains('main--color-colorful')) {
      mainColor[i].classList.remove('main--color-light');
      mainColor[i].classList.remove('main--color-colorful');
    }
    mainColor[i].classList.add('main--color-dark');
    mainColor[i].style.color = "#aaa6a6";
  }
  for (let i = 0; i < bgHead.length; i++) {
    bgHead[i].style.fill = "#1f1e1e";
  }
  document.querySelector('body').classList.add('main--color-dark');
}

function colorThemeColorful() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < mainColor.length; i++) {
    if (mainColor[i].classList.contains('main--color-light') || mainColor[i].classList.contains('main--color-dark')) {
      mainColor[i].classList.remove('main--color-light');
      mainColor[i].classList.remove('main--color-dark');
    }
    mainColor[i].classList.add('main--color-colorful');

      mainColor[i].style.color = `hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`;
      document.querySelector('.change__language').style.boxShadow = `0 0 0 3px hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`;
      document.querySelector('.eye-switch').style.boxShadow = `0 0 0 3px hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`;
    let mainColorColorful = document.querySelectorAll('main--color-colorful');
    console.log(mainColorColorful.length);
  }
  for (let i = 0; i < bgHead.length; i++) {
    bgHead[i].style.fill = `hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`;
  }
  // for (let i = 0; i < brdrColor.length; i++) {
  //   brdrColor[i].style.borderColor = `hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`;
  // }
  document.querySelector('body').classList.add('main--color-colorful');
}


colorThemeLabel[0].addEventListener('click', colorThemeLight);
colorThemeLabel[1].addEventListener('click', colorThemeDark);
colorThemeLabel[2].addEventListener('click', colorThemeColorful);
// colorThemeLabel[2].addEventListener('click', colorThemeColorful);

// gnats------------------------------
function gnatsFly(e) {
  let scene = document.querySelector(".lamp");
  if (!!!scene) {
    return;
  }
  let time = 1000;
  let timeTransitionMin = time * 2;
  let timeTransitionMax = time * 4;
  let timeIntervalMin = time;
  let timeIntervalMax = time * 2;
  let size = 1.5;
  for (let i = 0; i < 5; i++) {
    GWcreatePart(scene);
  }


  function GWcreatePart(scene) {
    let part = document.createElement('div');
    part.className = "gw-part";
    let partItem = document.createElement('div');
    partItem.className = "gw-part__item";
    part.appendChild(partItem);
    scene.appendChild(part);

    setInterval(function () {
      let tempTime = getRandomInt(timeTransitionMin, timeTransitionMax);
      part.style.transition = tempTime + "ms all";
      part.style.transform = 'translateX(' + getRandomInt(-scene.getBoundingClientRect().width / size, scene.getBoundingClientRect().width / size) + 'px) translateY(' + getRandomInt(-scene.getBoundingClientRect().height / size, scene.getBoundingClientRect().height / size) + 'px) rotate(' + getRandomInt(-400, 400) + 'deg)';
      partItem.style.transition = tempTime / 2 + "ms all";
      //   partItem.style.backgroundColor = `hsl(${getRandomInt(0, 360)}, ${getRandomInt(80, 100)}%, ${getRandomInt(45, 55)}%)`;
      // partItem.style.backgroundColor = "#838668";
      partItem.style.transform = 'translateX(' + getRandomInt(-150, 150) + 'px)  translateY(' + getRandomInt(-150, 150) + 'px)';
    }, getRandomInt(timeIntervalMin, timeIntervalMax));
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

// colorThemeLabel[1].addEventListener('click', gnatsFly);

// owls------------------------------------------------------------------------------------
let audioBtn = document.querySelector('.audio__btn');
let owl = document.querySelector('.owl');
let owl1 = document.querySelector('.owl1');
let owl2 = document.querySelector('.owl2');
let soundIconOn = document.querySelector('.sound-on__icon');
let soundIconOff = document.querySelector('.sound-off__icon');
// let screamDelayMin = 5000;
// let screamDelayMax = 100000;

function randomSound() {
  let sounds = [owl, owl1, owl2];
  let sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.volume = Math.random() * 1;
  console.log(sound.volume);
  sound.play();
  console.log(z);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


let z = 30000;
let owlsFlag = 0;
let owlsStart;


audioBtn.addEventListener('click', owlsStartEnd);
function owlsStartEnd() {
  audioBtn.classList.add('owls-btn--active');
  if (owlsFlag == 0) {
    // owlsStart = setInterval(randomSound, getRandomInt(screamDelayMin, screamDelayMax));
    owlsStart = setInterval(randomSound, z);
    soundIconOn.classList.remove('d-none');
    soundIconOff.classList.add('d-none');
    owlsFlag = 1;
  }
  else if (owlsFlag == 1) {
    audioBtn.classList.remove('owls-btn--active');
    clearInterval(owlsStart);
    soundIconOff.classList.remove('d-none');
    soundIconOn.classList.add('d-none');
    owlsFlag = 0;
  }
}


