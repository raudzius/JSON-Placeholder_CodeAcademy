fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(albums => {
    const main = document.querySelector('main');
    const ul = document.createElement('ul');
    albums.forEach(album => {
      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(user => {
          fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
            .then(res => res.json())
            .then(photos => {
              const li = document.createElement('li');
              li.innerHTML = `<h2><a href="../album/album.html?album_id=${album.id}">${album.title}</a></h2>
              <p>${photos.length}</p>
              <p>${user.name}</p>
              <img src="${photos[0].thumbnailUrl}" />`;
              ul.append(li);
            });
        });
    });
    main.append(ul);
  });
