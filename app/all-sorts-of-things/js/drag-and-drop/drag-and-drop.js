const block1 = document.querySelector('.block-1');
const block2 = document.querySelector('.block-2');
constelem = document.querySelector('#elem');

block1.ondragover = allowDrop;
block2.ondragover = allowDrop;

function allowDrop(event) {
  event.preventDefault();
}

elem.ondragstart = drag;

function drag(event) {
  event.dataTransfer.setData('id', event.target.id);
}

block1.ondrop = drop;
block2.ondrop = drop;

function drop(event) {
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId);
  event.target.append(document.getElementById(itemId));
}
