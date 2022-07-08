const body = document.body;
const form = document.forms[0];
const postsSection = document.getElementById('posts-section');
const albumsSection = document.getElementById('albums-section');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
  .then(res => res.json())
  .then(postData => {
    const postsOl = document.createElement('ol');
    postsOl.className = 'posts-ol';

    postData.forEach(post => {
      const postsLi = document.createElement('li');
      const commentsOl = document.createElement('ol');
      const commentsBtn = document.createElement('button');
      const div = document.createElement('div');
      div.className = 'action-wrapper';
      commentsBtn.textContent = 'Comments';
      commentsBtn.className = 'button';
      postsLi.className = 'posts-li';

      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => {
          const a = document.createElement('a');
          a.href = `href="./user/user.html?user_id=${post.userId}`;
          a.textContent = user.name;
          postsLi.innerHTML = `<h3>${post.title}</h3>
                             <p>${post.body}</p>`;
          div.append(a);
          div.append(commentsBtn);
          postsLi.append(div);
          div.before(commentsOl);
        });

      commentsBtn.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(res =>
          res.json().then(commentsData => {
            commentsOl.innerHTML = '';
            commentsData.forEach(comment => {
              const commentsLi = document.createElement('li');
              commentsLi.className = 'comments-li';
              commentsLi.innerHTML = `<h4>${comment.name}</h4>
                                   <p>${comment.body}</p>
                                   <div>${comment.email}</div>`;
              commentsOl.prepend(commentsLi);
            });
          })
        );

        if (commentsOl.style.display === 'block') {
          commentsOl.style.display = 'none';
        } else {
          commentsOl.style.display = 'block';
        }
      });

      postsOl.append(postsLi);
    });
    postsSection.append(postsOl);
  });

fetch('https://jsonplaceholder.typicode.com/albums?_limit=15')
  .then(res => res.json())
  .then(albums => {
    const albumsOl = document.createElement('ol');
    albumsOl.className = 'albums-ol';

    albums.forEach(album => {
      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(author => {
          fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
            .then(res => res.json())
            .then(photo => {
              const albumsLi = document.createElement('li');
              albumsLi.className = 'albums-li';
              albumsLi.innerHTML = `<div class="img-wrapper"><img src="${photo[0].thumbnailUrl}"></div>
                                    <a href="./album/album.html?album_id=${album.id}">${album.title}</a>
                                    <p>${author.name}</p>`;
              albumsOl.append(albumsLi);
            });
        });
    });
    albumsSection.append(albumsOl);
  });

form.addEventListener('submit', event => {
  const form = event.target;
  const searchInputValue = form.elements.search.value;
  console.log(searchInputValue);
  form.action += `?search_input=${searchInputValue}`;
});

console.dir(window.location);
