const albumId = new URLSearchParams(location.search).get('album_id');

fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
  .then(res => res.json())
  .then(album => {
    fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
      .then(res => res.json())
      .then(author => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
          .then(res => res.json())
          .then(photos => {
            const section = document.createElement('section');
            section.innerHTML = `<h2>${album.title}</h2>
            <p><a href="../author/author.html">${author.name}</a></p>`;
            document.body.prepend(section);
            photos.forEach(photo => {
              const div = document.createElement('div');
              const img = document.createElement('img');

              div.className = 'swiper-slide';
              img.setAttribute('src', `${photo.url}`);
              div.append(img);

              document.querySelector('.swiper-wrapper').append(div);
            });
            new Swiper('.swiper', {
              loop: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          });
      });
  });
