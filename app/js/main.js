// change language
let changeLanguage = document.querySelector('.change__language');
let home = document.querySelector('.home');
let aboutMe = document.querySelector('.about-me');
let myPortfolio = document.querySelector('.my-portfolio');
let myContacts = document.querySelector('.my-contacts');

changeLanguage.onclick = () => {
  if (changeLanguage.checked) {
    home.innerHTML = ('Home');
    aboutMe.innerHTML = ('About me');
    myPortfolio.innerHTML = ('Portfolio');
    myContacts.innerHTML = ('Contacts');
  }
  else {
    home.innerHTML = ('Главная');
    aboutMe.innerHTML = ('Обо мне');
    myPortfolio.innerHTML = ('Портфолио');
    myContacts.innerHTML = ('Контакты');
  }
}