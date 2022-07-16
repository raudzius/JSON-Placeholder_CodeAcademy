function displayUsers() {
  const main = document.querySelector('main');
  const ul = document.createElement('ul');
  fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
    .then(res => res.json())
    .then(users => {
      users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `<h2><a href="../user/user.html?user_id=${user.id}">${user.name}</a></h2><p>Posts: ${user.posts.length}</p>`;
        ul.append(li);
      });
    });
  main.append(ul);
}

displayUsers();
