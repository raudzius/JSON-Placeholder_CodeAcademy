import { displayHeader } from './../../header.js';
import { displayFooter } from './../../footer.js';

function renderPost() {
  fetch('https://jsonplaceholder.typicode.com/users?_embed=posts&_limit=1')
    .then(res => res.json())
    .then(users => {
      users.forEach(user => {
        const main = document.querySelector('main');
        main.innerHTML = `<h2>${user.name}</h2>`;
      });
    });
}

function init() {
  displayHeader();
  renderPost();
  displayFooter();
}

init();
