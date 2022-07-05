fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    users.forEach(user => {
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res => res.json())
        .then(posts => {
          const div = document.createElement('div');
          div.innerHTML = `<h2><a href="../user/user.html?user_id=${user.id}">${user.name}</a><br><span>${posts.length}</span></h2>`;
          document.body.append(div);
        });
    });
  });
