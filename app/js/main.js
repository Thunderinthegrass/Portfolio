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

changeLanguage.onclick = () => {
  if (changeLanguage.checked) {
    home.innerHTML = ('Home');
    aboutMe.innerHTML = ('About me');
    myPortfolio.innerHTML = ('Portfolio');
    myContacts.innerHTML = ('Contacts');

    paintSmearMask.classList.remove('go-right');
    paintSmearRu.classList.add('disp-none');
    

    paintSmearEn.classList.remove('disp-none');
    paintSmearMaskEn.classList.add('go-right');
  }
  else {
    home.innerHTML = ('Главная');
    aboutMe.innerHTML = ('Обо мне');
    myPortfolio.innerHTML = ('Портфолио');
    myContacts.innerHTML = ('Контакты');

    paintSmearRu.classList.remove('disp-none');
    paintSmearMask.classList.add('go-right');

    paintSmearMaskEn.classList.remove('go-right');
    paintSmearEn.classList.add('disp-none');
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