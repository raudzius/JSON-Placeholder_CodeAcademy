import { displayHeader } from '../../header.js';
import { displayFooter } from '../../footer.js';

function activateForm() {
  const form = document.forms[1];

  form.addEventListener('submit', event => {
    event.preventDefault();
    const ul = document.querySelector('main > ul');
    const form = event.target;
    const titleValue = form.elements.title.value;
    const bodyValue = form.elements.body.value;
    const userIdValue = form.elements['user-id'].value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleValue,
        body: bodyValue,
        userId: userIdValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(post => {
        const li = document.createElement('li');
        for (const key in post) {
          const p = document.createElement('p');
          p.textContent = `${key}: ${post[key]}`;
          li.append(p);
        }
        ul.append(li);
      });

    form.reset();
  });
}

function init() {
  displayHeader();
  activateForm();
  displayFooter();
}

init();
