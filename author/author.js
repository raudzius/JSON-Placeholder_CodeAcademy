fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(post => {
    const main = document.createElement('main');
    const btn = document.createElement('button');
    const ul = document.createElement('ul');

    btn.textContent = 'Comments';
    btn.addEventListener('click', () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(res =>
        res.json().then(commentsData => {
          ul.innerHTML = '';
          commentsData.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `<h3>${comment.name}</h3>
                                   <p>${comment.body}</p>
                                   <div>${comment.email}</div>`;
            ul.prepend(li);
          });
        })
      );
      if (ul.style.display === 'block') {
        ul.style.display = 'none';
      } else {
        ul.style.display = 'block';
      }
    });
    const div = document.createElement('div');
    main.innerHTML = `<p>${post.body}</p>`;
    div.innerHTML = `<a href="../index.html">Other posts</a>`;
    div.append(btn);
    main.append(div);
    main.append(ul);
    document.body.append(main);
  });
