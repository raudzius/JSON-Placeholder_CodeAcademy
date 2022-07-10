const main = document.querySelector('main');
const div = document.createElement('div');

function displaySearchResults(array, heading) {
  if (array.length) {
    const ul = document.createElement('ul');
    const h2 = document.createElement('h2');
    h2.textContent = heading;
    array.forEach(item => {
      const li = document.createElement('li');
      for (key in item) {
        if (typeof item[key] === 'object' || key === 'id' || key === 'userId') {
          continue;
        }

        const p = document.createElement('p');
        p.textContent = `${key}: ${item[key]}`;
        li.append(p);
      }
      ul.append(li);
    });
    div.append(h2, ul);
  }
}

function filterObjWithoutInput(array, searchValue) {
  return array.filter(item => {
    for (key in item) {
      if (typeof item[key] === 'object' || key === 'id' || key === 'userId') {
        continue;
      }

      if (item[key].toString().toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
    }
  });
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(res => res.json())
          .then(albums => {
            const searchValue = new URLSearchParams(location.search).get('search');
            const form = document.forms[1];

            let filteredUsers = users.filter(user => user.username === searchValue || user.name === searchValue || user.email === searchValue);
            let filteredPosts = posts.filter(post => post.title === searchValue);
            let filteredAlbums = albums.filter(album => album.title === searchValue);

            displaySearchResults(filteredUsers, 'Users');
            displaySearchResults(filteredPosts, 'Posts');
            displaySearchResults(filteredAlbums, 'Albums');

            const h1 = document.createElement('h1');
            if (!filteredUsers.length && !filteredPosts.length && !filteredAlbums.length) {
              h1.textContent = 'Rezultatų pagal užklausą nerasta.';
              main.prepend(h1);
            }

            form.addEventListener('submit', event => {
              event.preventDefault();
              h1.remove();
              div.innerHTML = ``;
              const form = event.target;
              const searchValue = form.elements.search.value;

              let filteredUsers = filterObjWithoutInput(users, searchValue);
              let filteredPosts = filterObjWithoutInput(posts, searchValue);
              let filteredAlbums = filterObjWithoutInput(albums, searchValue);

              displaySearchResults(filteredUsers, 'Users');
              displaySearchResults(filteredPosts, 'Posts');
              displaySearchResults(filteredAlbums, 'Albums');
              if ((div.innerHTML === '')) {
                main.prepend(h1);
              }
              main.append(div);
            });
            main.append(div);
          });
      });
  });
