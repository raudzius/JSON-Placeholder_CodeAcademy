function renderAlbums() {
  const main = document.querySelector('main');
  const ul = document.createElement('ul');
  main.append(ul);

  fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_limit=15')
    .then(res => res.json())
    .then(albums => {
      albums.forEach(album => {
        const li = document.createElement('li');
        li.innerHTML = `<h2><a href="../album/album.html?album_id=${album.id}">${album.title}</a></h2>
        <p>${album.photos.length}</p>
        <p>${album.user.name}</p>
        <img src="${album.photos[0].thumbnailUrl}" />`;
        ul.append(li);
      });
    });
}

renderAlbums();
