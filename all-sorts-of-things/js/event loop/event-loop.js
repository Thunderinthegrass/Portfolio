const buttons = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.dataset);
  console.log(event.target.dataset.word);
  console.log(parseInt(event.target.dataset.word));//преобразовываем значение в число
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);
  console.log(event.target === event.currentTarget);
  event.stopPropagation();
}

window.addEventListener('click', function(event) {
  console.log('Window click', event.target);
  // event.stopPropagation();
}, {capture: true})

buttons.forEach(button => {
  button.addEventListener('click', handleClick)
});
