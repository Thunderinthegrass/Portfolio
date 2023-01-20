function changeLang() {
  let changeLanguage = document.querySelector(".change__language"),
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
}
// changeLang();

function eye() {
  let eyeSwitch = document.querySelector(".eye-switch");
  eyeSlider = document.querySelector(".eye-slider");

  eyeSwitch.onclick = function () {
    let e = document.querySelector(".eye");
    eyeSwitch.checked
      ? (e.classList.remove("eye-red"),
        eyeSlider.classList.add("eye-slider--checked"))
      : (e.classList.add("eye-red"),
        eyeSlider.classList.remove("eye-slider--checked"));
  };
}
eye();

function mobileMenu() {
  let menuBtn = document.querySelector(".menu-btn"),
    menuBtnElem = document.querySelector(".menu-btn__elem"),
    headerMenu = document.querySelector(".header__menu"),
    headerMenuItem = document.querySelectorAll(".header__menu_item"),
    overlay = document.querySelector('.overlay');

  function menuBtnAnim() {
      menuBtn.classList.toggle("menu-btn--active"),
      menuBtnElem.classList.toggle("menu-btn__elem--active"),
      headerMenu.classList.toggle("menu--active");
      overlay.classList.toggle('d-none');
  }

  function hiddMenu() {
    "block" === window.getComputedStyle(menuBtn).display && menuBtnAnim();
  }

  menuBtn.addEventListener("click", menuBtnAnim);
  overlay.addEventListener('click', menuBtnAnim);

  for (let e = 0; e < headerMenuItem.length; e++)
    headerMenuItem[e].addEventListener("click", hiddMenu);
}
mobileMenu();

function scrollToLink() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
scrollToLink();

function progressScroll() {
  const progress = document.querySelector(".progress");
  function progressBar(e) {
    let o =
      ((document.body.scrollTop || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;
    progress.style.height = o + "%";
  }
  progressBar();
}
window.addEventListener("scroll", progressScroll);

function btnToTop() {
  let e = $(".btn-totop");
  $(window).on("scroll", () => {
    $(this).scrollTop() >= 100 ? e.fadeIn() : e.fadeOut();
  }),
    e.on("click", (e) => {
      e.preventDefault(), $("html").animate({ scrollTop: 0 }, 500);
    });
}
btnToTop();

function scrollAnimation() {
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
}
scrollAnimation();

function tuningPanel() {

  let tuningBtn = document.querySelector(".tuning-btn");
  let tuning = document.querySelector(".tuning");
  let tuningElems = document.querySelectorAll('._tuning');

  function tuningActive() {
    tuning.classList.toggle("tuning--active");
    tuningBtn.classList.toggle("tuning-btn--rotate");
  }

  tuningBtn.addEventListener("click", tuningActive);

  document.body.addEventListener('click', (e) => {
    if ((e.target.classList.contains('_tuning')) == false) {
      tuning.classList.remove("tuning--active");
      tuningBtn.classList.remove("tuning-btn--rotate");
    }
  })
}
tuningPanel();

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

//accordion

function accordions() {
  const accordion = document.querySelectorAll(".scills__list");

  accordion.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(".accordion__control");
      const content = self.querySelector(".accordion__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });
}
accordions();
