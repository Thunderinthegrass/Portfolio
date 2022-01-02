function garlang() {
  const colors = ['#f61f1f', '#08c30f', '#1355ff', '#fbe200'];
  const colors2 = ['#08c30f', '#1355ff', '#fbe200', '#f61f1f'];
  const colors3 = ['#1355ff', '#fbe200', '#f61f1f', '#08c30f'];
  let pumpkin1 = document.querySelectorAll('.pumpkin-1')
  let pumpkin2 = document.querySelectorAll('.pumpkin-2')
  let pumpkin3 = document.querySelectorAll('.pumpkin-3')
  let shadowElem1 = document.querySelectorAll('.shadow-elem-1');
  let shadowElem2 = document.querySelectorAll('.shadow-elem-2');
  let shadowElem3 = document.querySelectorAll('.shadow-elem-3');

  let z = 0;
  function garlangGo() {
    setTimeout(() => {
      for (let i = 0; i < pumpkin1.length; i++) {
        let pumpkin1Cls = pumpkin1[i].querySelectorAll('.cls-4');
        shadowElem1[i].style.boxShadow = `0px 30px 50px ${colors[z]}, 30px 0px 50px ${colors[z]}, 0px -30px 50px ${colors[z]}, -30px 0px 50px ${colors[z]}, 0px 30px 70px ${colors2[z]}, 30px 0px 70px ${colors2[z]}, 0px -30px 70px ${colors2[z]}, -30px 0px 70px ${colors2[z]}`;
        for (let k = 0; k < pumpkin1Cls.length; k++) {
          pumpkin1Cls[k].style.fill = `${colors[z]}`;
        }
      }

      for (let i = 0; i < pumpkin2.length; i++) {
        let pumpkin2Cls = pumpkin2[i].querySelectorAll('.cls-4');
        shadowElem2[i].style.boxShadow = `0px 30px 50px ${colors2[z]}, 30px 0px 50px ${colors2[z]}, 0px -30px 50px ${colors2[z]}, -30px 0px 50px ${colors2[z]}, 0px 30px 70px ${colors2[z]}, 30px 0px 70px ${colors2[z]}, 0px -30px 70px ${colors2[z]}, -30px 0px 70px ${colors2[z]}`;
        for (let k = 0; k < pumpkin2Cls.length; k++) {
          pumpkin2Cls[k].style.fill = `${colors2[z]}`;
        }
      }

      for (let i = 0; i < pumpkin3.length; i++) {
        let pumpkin3Cls = pumpkin3[i].querySelectorAll('.cls-4');
        shadowElem3[i].style.boxShadow = `0px 30px 50px ${colors3[z]}, 30px 0px 50px ${colors3[z]}, 0px -30px 50px ${colors3[z]}, -30px 0px 50px ${colors3[z]}, 0px 30px 70px ${colors3[z]}, 30px 0px 70px ${colors3[z]}, 0px -30px 70px ${colors2[z]}, -30px 0px 70px ${colors3[z]}`;
        for (let k = 0; k < pumpkin3Cls.length; k++) {
          pumpkin3Cls[k].style.fill = `${colors3[z]}`;
        }
      }
      z++;
      if (z == 4) {
        z = 0;
      }
      garlangGo();
    }, 700)
  }
  garlangGo();
}
garlang();
