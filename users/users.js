fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    const main = document.querySelector('main');
    const ul = document.createElement('ul');
    users.forEach(user => {
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res => res.json())
        .then(posts => {
          const li = document.createElement('li');
          li.innerHTML = `<h2><a href="../user/user.html?user_id=${user.id}">${user.name}</a></h2><p>Posts: ${posts.length}</p>`;
          ul.append(li);
        });
    });
    main.append(ul);
  });
