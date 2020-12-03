// change language
let changeLanguage = document.querySelector('.change__language');
let home = document.querySelector('.home');
let aboutMe = document.querySelector('.about-me');
let myPortfolio = document.querySelector('.my-portfolio');
let myContacts = document.querySelector('.my-contacts');
let paintSmearMask = document.querySelector('.paint-smear-mask');
let paintSmearRu = document.querySelector('.paint-smear-ru');
let paintSmearEn = document.querySelector('.paint-smear-en');
let paintSmearMaskEn = document.querySelector('.paint-smear-mask-en');
let headerTitle = document.querySelector('.header__title');

changeLanguage.onclick = () => {
  if (changeLanguage.checked) {
    home.innerHTML = ('Home');
    aboutMe.innerHTML = ('About me');
    myPortfolio.innerHTML = ('Portfolio');
    myContacts.innerHTML = ('Contacts');

    headerTitle.innerHTML = ('Roman Nasachevsky');
  }
  else {
    home.innerHTML = ('Главная');
    aboutMe.innerHTML = ('Обо мне');
    myPortfolio.innerHTML = ('Портфолио');
    myContacts.innerHTML = ('Контакты');

    headerTitle.innerHTML = ('Роман Насачевский');
  }
}
//eye
let eyeSwitch = document.querySelector('.eye-switch');

eyeSwitch.onclick = function() {
  let eye = document.querySelector('.eye');
  if (eyeSwitch.checked) {
    eye.classList.remove('eye-red');
  }
  else{
    eye.classList.add('eye-red');
  }
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
    $('html').animate({scrollTop: 0}, 500);
  })
}

btnToTop();



// scroll animation-------------------------------------------------
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for(let k = 0; k < animItems.length; k++) {
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
      else{
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