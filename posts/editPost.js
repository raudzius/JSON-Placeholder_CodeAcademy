const userId = new URLSearchParams(location.search).get('user_id');
const postId = new URLSearchParams(location.search).get('post_id');
const postTitle = new URLSearchParams(location.search).get('post_title');
const postBody = new URLSearchParams(location.search).get('post_body');

const form = document.forms[0];

form.elements.title.value = postTitle;
form.elements.body.value = postBody;
form.elements['user-id'].value = userId;

form.addEventListener('submit', event => {
  event.preventDefault();
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  const form = event.target;
  const titleValue = form.elements.title.value;
  const bodyValue = form.elements.body.value;
  const userIdValue = form.elements['user-id'].value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: postId,
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
      for (key in post) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${post[key]}`;
        li.append(p);
      }
      ul.append(li);
    });
});
