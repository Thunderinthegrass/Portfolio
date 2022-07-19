let changeLanguage = document.querySelector(".change__language"),
  eyeSlider = document.querySelector(".eye-slider"),
  langSlider = document.querySelector(".lang-slider"),
  contentLangEn = [
    "наверх",
    "главная",
    "портфолио",
    "обо мне",
    "выключить глаз",
    "роман насачевский",
    "верстальщик",
    "роман насачевский",
    "верстальщик",
    "портфолио",
    "обо мне",
    "Стек веб-технологий",
    "CSS-анимация",
    "Кроссбраузерная, адаптивная вёрстка",
    "БЭМ-методология",
    "Pixel Perfect",
    "Контакты",
    "Напиcать мне",
    "Имя*",
    "Сообщение",
    "Отправить",
  ],
  contentLangRu = [
    "up",
    "home",
    "portfolio",
    "about me",
    "turn off the eye",
    "roman nasachevsky",
    "layout designer",
    "roman nasachevsky",
    "layout designer",
    "portfolio",
    "about me",
    "Web technology stack",
    "CSS animation",
    "Cross-browser, responsive layout",
    "BEM methodology",
    "Pixel Perfect",
    "Contacts",
    "Write me",
    "Name*",
    "Massage",
    "Send",
  ],
  contentItem = document.querySelectorAll("._lang");
changeLanguage.onclick = () => {
  for (let e = 0; e < contentItem.length; e++)
    changeLanguage.checked
      ? (contentItem[e].textContent = contentLangEn[e])
      : (contentItem[e].textContent = contentLangRu[e]);
  changeLanguage.checked
    ? langSlider.classList.add("lang-slider--checked")
    : langSlider.classList.remove("lang-slider--checked");
};
let eyeSwitch = document.querySelector(".eye-switch");
eyeSwitch.onclick = function () {
  let e = document.querySelector(".eye");
  eyeSwitch.checked
    ? (e.classList.remove("eye-red"),
      eyeSlider.classList.add("eye-slider--checked"))
    : (e.classList.add("eye-red"),
      eyeSlider.classList.remove("eye-slider--checked"));
};
let menuBtn = document.querySelector(".menu-btn"),
  menuBtnElem = document.querySelector(".menu-btn__elem"),
  headerMenu = document.querySelector(".header__menu"),
  headerMenuItem = document.querySelectorAll(".header__menu_item");

function menuBtnAnim() {
  menuBtn.classList.toggle("menu-btn--active"),
    menuBtnElem.classList.toggle("menu-btn__elem--active"),
    headerMenu.classList.toggle("menu--active");
}

function hiddMenu() {
  "block" === window.getComputedStyle(menuBtn).display && menuBtnAnim();
}

menuBtn.addEventListener("click", menuBtnAnim);

for (let e = 0; e < headerMenuItem.length; e++)
  headerMenuItem[e].addEventListener("click", hiddMenu);
const anchors = document.querySelectorAll('a[href*="#"]');
for (let e of anchors)
  e.addEventListener("click", function (o) {
    o.preventDefault();
    const t = e.getAttribute("href");
    document
      .querySelector("" + t)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
const progress = document.querySelector(".progress");
function progressBar(e) {
  let o =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  progress.style.height = o + "%";
}
function btnToTop() {
  let e = $(".btn-totop");
  $(window).on("scroll", () => {
    $(this).scrollTop() >= 100 ? e.fadeIn() : e.fadeOut();
  }),
    e.on("click", (e) => {
      e.preventDefault(), $("html").animate({ scrollTop: 0 }, 500);
    });
}
window.addEventListener("scroll", progressBar), btnToTop();
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  function animOnScroll() {
    for (let e = 0; e < animItems.length; e++) {
      const o = animItems[e],
        t = o.offsetHeight,
        n = offset(o).top,
        l = 2;
      let c = window.innerHeight - t / l;
      t > window.innerHeight &&
        (c = window.innerHeight - window.innerHeight / l),
        pageYOffset > n - c && pageYOffset < n + t
          ? o.classList.add("_active")
          : o.classList.remove("_active");
    }
  }
  function offset(e) {
    const o = e.getBoundingClientRect(),
      t = window.pageXOffset || document.documentElement.scrollLeft,
      n = window.pageYOffset || document.documentElement.scrollTop;
    return { top: o.top + n, left: o.left + t };
  }
  window.addEventListener("scroll", animOnScroll),
    setTimeout(() => {
      animOnScroll();
    }, 100),
    animOnScroll();
}
let tuningBtn = document.querySelector(".tuning-btn"),
  tuning = document.querySelector(".tuning"),
  zzzzz = 0;
function tuningActive() {
  tuning.classList.toggle("tuning--active"),
    tuningBtn.classList.toggle("tuning-btn--rotate");
}
tuningBtn.addEventListener("click", tuningActive);
let gnatsStop = 0,
  colorThemeInput = document.querySelectorAll(".color-theme-input"),
  colorThemeLabel = document.querySelectorAll(".color-theme-label"),
  mainColor = document.querySelectorAll(".main--color"),
  body = document.querySelector("body"),
  headerText = document.querySelector(".header__text"),
  bgHead = document.querySelectorAll(".bg--colorful"),
  brdrColor = document.querySelectorAll(".brdr--color"),
  headerBgWrapper = document.querySelector(".header__bg-wrapper"),
  elemBg = document.querySelectorAll(".elem--bg");
// function colorThemeLight() {
//   (document.querySelector(".change__language").style.boxShadow =
//     "0 0 0 3px #373841"),
//     (document.querySelector(".eye-switch").style.boxShadow =
//       "0 0 0 3px #373841");
//   for (let e = 0; e < mainColor.length; e++)
//     (mainColor[e].classList.contains("main--color-dark") ||
//       mainColor[e].classList.contains("main--color-colorful")) &&
//       (mainColor[e].classList.remove("main--color-dark"),
//       mainColor[e].classList.remove("main--color-colorful")),
//       mainColor[e].classList.add("main--color-light"),
//       (mainColor[e].style.color = "#383942");
//   for (let e = 0; e < bgHead.length; e++) bgHead[e].style.fill = "#383942";
//   body.classList.add("main--color-light");
// }
// function colorThemeDark() {
//   (document.querySelector(".change__language").style.boxShadow =
//     "0 0 0 3px #aaa6a6"),
//     (document.querySelector(".eye-switch").style.boxShadow =
//       "0 0 0 3px #aaa6a6");
//   for (let e = 0; e < mainColor.length; e++)
//     (mainColor[e].classList.contains("main--color-light") ||
//       mainColor[e].classList.contains("main--color-colorful")) &&
//       (mainColor[e].classList.remove("main--color-light"),
//       mainColor[e].classList.remove("main--color-colorful")),
//       mainColor[e].classList.add("main--color-dark"),
//       (mainColor[e].style.color = "#aaa6a6");
//   for (let e = 0; e < bgHead.length; e++) bgHead[e].style.fill = "#1f1e1e";
//   document.querySelector("body").classList.add("main--color-dark");
// }
// function colorThemeColorful() {
//   function e(e, o) {
//     return Math.floor(Math.random() * (o - e)) + e;
//   }
//   for (let o = 0; o < mainColor.length; o++) {
//     (mainColor[o].classList.contains("main--color-light") ||
//       mainColor[o].classList.contains("main--color-dark")) &&
//       (mainColor[o].classList.remove("main--color-light"),
//       mainColor[o].classList.remove("main--color-dark")),
//       mainColor[o].classList.add("main--color-colorful"),
//       (mainColor[o].style.color = `hsl(${e(0, 360)}, ${e(80, 100)}%, ${e(
//         45,
//         55
//       )}%)`),
//       (document.querySelector(
//         ".change__language"
//       ).style.boxShadow = `0 0 0 3px hsl(${e(0, 360)}, ${e(80, 100)}%, ${e(
//         45,
//         55
//       )}%)`),
//       (document.querySelector(
//         ".eye-switch"
//       ).style.boxShadow = `0 0 0 3px hsl(${e(0, 360)}, ${e(80, 100)}%, ${e(
//         45,
//         55
//       )}%)`);
//     let t = document.querySelectorAll("main--color-colorful");
//     console.log(t.length);
//   }
//   for (let o = 0; o < bgHead.length; o++)
//     bgHead[o].style.fill = `hsl(${e(0, 360)}, ${e(80, 100)}%, ${e(45, 55)}%)`;
//   for (let o = 0; o < elemBg.length; o++)
//     elemBg[o].style.background = `hsl(${e(0, 360)}, ${e(80, 100)}%, ${e(
//       45,
//       55
//     )}%)`;
//   document.querySelector("body").classList.add("main--color-colorful");
// }
// colorThemeLabel[0].addEventListener("click", colorThemeLight),
//   colorThemeLabel[1].addEventListener("click", colorThemeDark),
//   colorThemeLabel[2].addEventListener("click", colorThemeColorful);

function colorThemes() {
  let theme = "light";
  function detectColorScheme() {

    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        theme = "dark";
      }
    } else if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }

    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
  detectColorScheme();

  const ligthSwitchBtn = document.querySelector(".color-theme__light-btn");
  const darkSwitchBtn = document.querySelector(".color-theme__dark-btn");
  function switchThemeLight(e) {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    darkSwitchBtn.classList.add("active");
    e.target.classList.add("active");
  }
  function switchThemeDark(e) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    ligthSwitchBtn.classList.remove("active");
    e.target.classList.add("active");
  }
  ligthSwitchBtn.addEventListener("click", switchThemeLight, false);
  darkSwitchBtn.addEventListener("click", switchThemeDark, false);
}
colorThemes();
