// // gnat--------------
// let start = document.querySelector('.btn');
// start.addEventListener('click', gnatFly);
// let gnat = document.querySelector('.gnat');

// let route = 0;

// let flag = 0;

// function gnatFly() {

//   if (flag == 0) {
//     route = Math.round(Math.random() * 500);
//     // routeBack = route - (route * 2);

//     gnat.style.backgroundColor = "#ff5555";
//     // gnat.style.transform = `translateX(${route}vw)`;
//     gnat.style.transform = `rotate(${route}deg) translateX(${route}px) rotate(${route}deg)`;
//     // flag = 1;

//     console.log(route);
//     // console.log(routeBack);
//   }
//   // else{
//   //   gnat.style.backgroundColor = "#0ddfee";
//   //   // gnat.style.transform = "translateX(0)";
//   //   // gnat.style.transform = "rotate(0deg) translateX(-100px) rotate(0deg)";
//   //   flag = 0;
//   // }
// }


// пример из интернета
document.addEventListener('DOMContentLoaded', function (e) {
  let scene = document.querySelector(".gw-parts-scene");
  if (!!!scene) {
      return;
  }
  let time = 1000;
  let timeTransitionMin = time * 2;
  let timeTransitionMax = time * 5;
  let timeIntervalMin = time;
  let timeIntervalMax = time * 2;
  let size = 1.5;
  for (let i = 0; i < 100; i++) {
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
          partItem.style.backgroundColor = "#838668";
          partItem.style.transform = 'translateX(' + getRandomInt(-150, 150) + 'px)  translateY(' + getRandomInt(-150, 150) + 'px)';
      }, getRandomInt(timeIntervalMin, timeIntervalMax));
  }

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }
});