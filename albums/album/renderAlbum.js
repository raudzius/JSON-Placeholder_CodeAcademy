import fetchAlbum from './fetchAlbum.js';

async function renderAlbum() {
  const album = await fetchAlbum();
  const main = document.querySelector('main');
  const section = document.createElement('section');
  main.prepend(section);
  section.innerHTML = `
              <h2>${album.title}</h2>
              <p><a href="../author/author.html">${album.user.name}</a></p>`;

  album.photos.forEach(photo => {
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
}

export default renderAlbum;
