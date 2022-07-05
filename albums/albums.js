fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(albums => {
    albums.forEach(album => {
      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(user => {
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
          )
            .then(res => res.json())
            .then(photos => {
              const div = document.createElement('div');
              div.innerHTML = `<h2><a href="../album/album.html?album_id=${album.id}">${album.title}</a></h2>
              <p>${photos.length}</p>
              <p>${user.name}</p>
              <img src="${photos[0].thumbnailUrl}" />`;
              document.body.append(div);
            });
        });
    });
  });
