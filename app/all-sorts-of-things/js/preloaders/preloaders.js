function circleBalls() {
  let ball = document.querySelectorAll('.circle-of-balls__ball');
  let z = 0;
  function ballTranslucent() {
    if (z <= ball.length) {
      setTimeout(() => {
        ball[z].classList.add('ball-active');
        if (z < ball.length + 1) {
          z++;
          console.log(z);
        }
        if (z == ball.length) {
          z = 0;
        }
        if (z > 0) {
          setTimeout(() => {
            ball[z - 1].classList.remove('ball-active');
          }, 90)
        }
        if (z == 0) {
          setTimeout(() => {
            ball[ball.length - 1].classList.remove('ball-active');
          }, 90)
        }
        ballTranslucent();
      }, 90)
    }
  }
  ballTranslucent();
}
circleBalls();
