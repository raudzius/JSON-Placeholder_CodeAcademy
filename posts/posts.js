fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
  .then(res => res.json())
  .then(posts => {
    const main = document.querySelector('main');
    const ul = document.querySelector('main > ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const a = document.createElement('a');
      const btn = document.createElement('button');
      btn.textContent = 'Delete';
      btn.className = 'button';
      a.href = `./editPost.html?user_id=${post.userId}&post_id=${post.id}&post_title=${post.title}&post_body=${post.body}`;
      a.textContent = 'Edit';

      for (key in post) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${post[key]}`;
        li.append(p);
      }

      btn.addEventListener('click', event => {
        event.target.parentElement.parentElement.remove();
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
          method: 'DELETE',
        });
      });

      div.append(a);
      div.append(btn);
      li.append(div);
      ul.append(li);
    });
    main.append(ul);
  });
