const form = document.forms[0];
const postsUl = document.querySelector('.posts');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
  .then(res => res.json())
  .then(postData => {
    postData.forEach(post => {
      const postsLi = document.createElement('li');
      postsLi.className = 'post';
      const commentsUl = document.createElement('ul');
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
          a.href = `./user/user.html?user_id=${post.userId}`;
          a.textContent = user.name;
          postsLi.innerHTML = `<h3 class="fs-600 fw-bold">${post.title}</h3>
                             <p>${post.body}</p>`;
          div.append(a);
          div.append(commentsBtn);
          postsLi.append(div);
          div.before(commentsUl);
        });

      commentsBtn.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(res =>
          res.json().then(commentsData => {
            commentsUl.innerHTML = '';
            commentsData.forEach(comment => {
              const commentsLi = document.createElement('li');
              commentsLi.className = 'comments-li';
              commentsLi.innerHTML = `<h4>${comment.name}</h4>
                                   <p>${comment.body}</p>
                                   <div>${comment.email}</div>`;
              commentsUl.prepend(commentsLi);
            });
          })
        );

        if (commentsUl.style.display === 'block') {
          commentsUl.style.display = 'none';
        } else {
          commentsUl.style.display = 'block';
        }
      });

      postsUl.append(postsLi);
    });
  });

fetch('https://jsonplaceholder.typicode.com/albums?_limit=15')
  .then(res => res.json())
  .then(albums => {
    const carouselAlbumUl = document.querySelector('.carousel__album-list');
    const carouselAlbumNav = document.querySelector('.carousel__album-nav');
    let num = 0;

    albums.forEach(album => {
      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(author => {
          fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
            .then(res => res.json())
            .then(photo => {
              const li = document.createElement('li');
              const a = document.createElement('a');
              num++;

              li.className = 'albums-li';
              li.id = `item${num}`;
              li.innerHTML = `<div class="img-wrapper"><img src="${photo[0].thumbnailUrl}"></div>
                                    <a href="./album/album.html?album_id=${album.id}">${album.title}</a>
                                    <p>${author.name}</p>`;
              a.href = `#item${num}`;
              a.textContent = num;
              carouselAlbumUl.append(li);
              carouselAlbumNav.append(a);
            });
        });
    });
  });

form.addEventListener('submit', event => {
  const form = event.target;
  const searchInputValue = form.elements.search.value;
  form.action += `?search_input=${searchInputValue}`;
});
