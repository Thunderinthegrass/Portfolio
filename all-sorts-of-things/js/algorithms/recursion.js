let offset = 0;
let rect = document.querySelector('.rect');
let btn = document.querySelector('.btn');
let rectWidth = rect.offsetWidth;
function move() {
    offset += 1;
    rect.style.transform = `translateY(${offset}px)`
    if (offset > 800) {
      return true;
    }
    setTimeout(move, 10);
}
btn.addEventListener('click', move);

function fact(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return n * fact(n - 1);
}

console.log(fact(5));


function rec() {
  let wrap = document.querySelector('.recursion-wrapper');
  let w = 800;
  let h = 800;

  function newRec() {
    if (w > 0) {
      setTimeout(() => {
        w = w - 70;
        h = h - 70;
        let div = document.createElement('div');
        div.classList.add('recursion-item');
        div.style.width = `${w}px`;
        div.style.height = `${h}px`;

        // let recItem = document.querySelector('.recursion-item');
        //
        // // let ofW = recItem.offsetWidth;
        // // let ofH = recItem.offsetHeight;
        //
        // console.log(recItem);

        wrap.appendChild(div);
        let clas = div.closest('.recursion-wrapper');
        // console.log(clas);
        newRec();
      }, 100)
    }
  }
  newRec();
}
// rec();


let recBtn = document.querySelector('.rec-btn').addEventListener('click', rec);


//v2




//matrix(1, 0, 0, 1, 200, 200)
function tunnel() {
  let tunnel = document.querySelector('.tunnel-wrapper');
  let z = 100;
  let x = 200;
  let y = 200;
  let dir = 0;
  function tunnelGo() {
    setTimeout(() => {
      let div = document.createElement('div');
      div.classList.add('tunnel__item');
      div.style.zIndex = z;
      tunnel.appendChild(div);

      div.style.transform = `translate(${x}px, 200px)`;
      if (dir == 0) {
        x = x - 25;
      }
      if (x == -300) {
        dir = 1;
      }
      if (dir == 1) {
        x = x + 25;
      }
      if (x == 200) {
        dir = 0;
      }
      let compX = window.getComputedStyle(div, null);
      console.log(compX.transform);

      z = z - 1;
      if (z == 0) {
        z = 100;
      }
      tunnelGo();
    }, 500)
    setTimeout(() => {
        setTimeout(() => {
          tunnel.firstChild.remove();
        }, 1000)

    }, 2000)
  }
  tunnelGo();
}
tunnel();























//
