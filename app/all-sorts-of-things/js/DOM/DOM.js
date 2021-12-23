let body = document.body;
let div = document.createElement('div');
div.classList.add('wrapper');
body.appendChild(div);

let h1 = document.createElement('h1');
h1.textContent = 'Секретные материалы';
div.insertAdjacentElement('beforebegin', h1);

let ul = `<ul>
              <li>раз</li>
              <li>два</li>
              <li>три</li>
          </ul>`;
div.innerHTML = ul;
console.log(body);
