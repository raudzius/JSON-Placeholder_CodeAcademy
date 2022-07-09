fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(post => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(res => res.json())
      .then(author => {
        const main = document.createElement('main');
        main.innerHTML = `<h2>${post.title}</h2>
                           <p><a href="../author/author.html">${author.name}</a></p>`;
        document.body.append(main);
      });
  });
