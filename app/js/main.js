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