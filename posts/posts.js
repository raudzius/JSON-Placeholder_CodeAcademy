fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
  .then(res => res.json())
  .then(posts => {
    const ul = document.querySelector('ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const btn = document.createElement('button');
      a.href = `./editPost.html?user_id=${post.userId}&post_id=${post.id}&post_title=${post.title}&post_body=${post.body}`;
      a.textContent = 'Edit';

      for (key in post) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${post[key]}`;
        li.append(p);
      }

      btn.addEventListener('click', event => {
        event.target.parentElement.remove();
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
          method: 'DELETE',
        });
      });

      li.append(a);
      li.append(btn);
      ul.append(li);
    });
  });
