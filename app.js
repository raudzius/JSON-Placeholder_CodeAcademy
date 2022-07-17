import { displayHeader } from './header.js';
import { displayFooter } from './footer.js';

function displayPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments&_limit=15')
    .then(res => res.json())
    .then(posts => {
      const postsUl = document.querySelector('.posts');
      posts.forEach(post => {
        const postsLi = document.createElement('li');
        const commentsUl = document.createElement('ul');
        const div = document.createElement('div');
        const commentsBtn = document.createElement('button');
        const a = document.createElement('a');

        postsLi.className = 'posts-li';
        postsLi.innerHTML = `<h3 class="fs-600 fw-bold">${post.title}</h3><p>${post.body}</p>`;
        div.className = 'action-wrapper';
        a.href = `./users/user/user.html?user_id=${post.userId}`;
        a.textContent = post.user.name;
        commentsBtn.className = 'button';
        commentsBtn.textContent = 'Comments';

        commentsBtn.addEventListener('click', () => {
          commentsUl.innerHTML = '';
          post.comments.forEach(comment => {
            const commentsLi = document.createElement('li');
            commentsLi.className = 'comments-li';
            commentsLi.innerHTML = `<h4>${comment.name}</h4>
                                  <p>${comment.body}</p>
                                  <div>${comment.email}</div>`;
            commentsUl.prepend(commentsLi);
          });
          commentsUl.style.display = commentsUl.style.display === 'block' ? 'none' : 'block';
        });

        postsUl.append(postsLi);
        postsLi.append(div);
        div.append(a);
        div.append(commentsBtn);
        div.before(commentsUl);
      });
    });
}

function displayAlbums() {
  fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_limit=15')
    .then(res => res.json())
    .then(albums => {
      const carouselAlbumUl = document.querySelector('.carousel__album-list');
      const carouselAlbumNav = document.querySelector('.carousel__album-nav');
      let num = 0;
      albums.forEach(album => {
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
                                      <p>${album.user.name}</p>`;
            a.href = `#item${num}`;
            a.textContent = num;
            carouselAlbumUl.append(li);
            carouselAlbumNav.append(a);
          });
      });
    });
}

function enableSearchForm() {
  document.forms[0].addEventListener('submit', event => {
    const form = event.target;
    const searchInputValue = form.elements.search.value;
    form.action += `?search_input=${searchInputValue}`;
  });
}

function init() {
  displayHeader();
  displayPosts();
  displayAlbums();
  enableSearchForm();
  displayFooter();
}

init();
