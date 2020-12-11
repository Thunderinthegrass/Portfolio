// change language
let changeLanguage = document.querySelector('.change__language');
let contentLangRu = [
  'наверх',
  'главная',
  'обо мне',
  'портфолио',
  'выключить глаз',
  'роман насачевский',
  'верстальщик',
  'роман насачевский',
  'верстальщик'
];

let contentLangEn = [
  'up',
  'home',
  'about me',
  'portfolio',
  'turn off the eye',
  'roman nasachevsky',
  'layout designer',
  'roman nasachevsky',
  'layout designer'
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

menuBtn.onclick = () => {
  menuBtn.classList.toggle('menu-btn--active');
  menuBtnElem.classList.toggle('menu-btn__elem--active');

  headerMenu.classList.toggle('menu--active');

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