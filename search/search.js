const main = document.querySelector('main');
const div = document.querySelector('.searchResult');

function searchForm(searchPhrase, paramExtra = '') {
  const h1 = document.createElement('h1');
  h1.textContent = 'No matching results';

  const queryParams = {
    users: ['username', 'name', 'email'],
    albums: ['title'],
    posts: ['title'],
  };

  let count = 0;

  Object.keys(queryParams).forEach(key => {
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');

    div.append(h2);
    div.append(ul);
    queryParams[key].forEach(urlParam => {
      fetch(`https://jsonplaceholder.typicode.com/${key}?${urlParam + paramExtra}=${searchPhrase}`)
        .then(res => res.json())
        .then(data => {
          if (data.length) {
            data.forEach(obj => {
              const li = document.createElement('li');
              if (key === 'users') {
                li.innerHTML = `<a href="../user/user.html?user_id=${obj.id}">${obj.name}</a>`;
              }
              if (key === 'albums') {
                li.innerHTML = `<a href="../album/album.html?album_id=${obj.id}">${obj.title}</a>`;
              }
              if (key === 'posts') {
                li.innerHTML = `<a href="../post/post.html?post_id=${obj.id}">${obj.title}</a>`;
              }
              h2.textContent = key[0].toUpperCase() + key.slice(1);
              ul.append(li);
            });
          } else {
            count++;
            count === [].concat(...Object.values(queryParams)).length && div.append(h1);
          }
        });
    });
  });
}

function outerSearchForm() {
  const searchPhrase = new URLSearchParams(document.location.search).get('search');
  searchForm(searchPhrase);
  // window.history.pushState({}, document.title, window.location.pathname);
}

function innerSearchForm() {
  document.forms[0].addEventListener('submit', event => {
    event.preventDefault();
    div.innerHTML = ``;

    const searchInputValue = event.target.elements.search.value;
    searchForm(searchInputValue, '_like');
  });
}

function init() {
  outerSearchForm();
  innerSearchForm();
}

init();
