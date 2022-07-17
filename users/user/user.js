import { displayHeader } from '../../header.js';
import { displayFooter } from '../../footer.js';

function renderUserData() {
  const userId = new URLSearchParams(location.search).get('user_id');

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
    .then(res => res.json())
    .then(user => {
      const main = document.querySelector('main');
      const section = document.createElement('section');
      const postsH2 = document.createElement('h2');
      const postsOl = document.createElement('ol');
      const albumsH3 = document.createElement('h2');
      const albumsOl = document.createElement('ol');

      postsH2.textContent = 'Posts';
      albumsH3.textContent = 'Albums';

      main.innerHTML = `
    <h1>${user.name}</h1>
    <ul id="user">
    <li>Username: ${user.username}</li>
    <li>Email: ${user.email}</li>
    <li>Address: <a href="https://www.google.com/maps/place/37%C2%B018
    57.2%22S+81%C2%B008
    58.6%22E/@${user.address.geo.lat},${user.address.geo.lng},6.5z/data=!4m2!3m1!1s0x0:0x39e931c3f0a55e62">${user.address.street}, ${user.address.suite}, ${user.address.city}, zip: ${user.address.zipcode}</a></li>
    <li>Phone: ${user.phone}</li>
    <li>Website: ${user.website}</li>
    <li>Company: ${user.company.name}</li></ul>`;

      user.posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<h3><a href="../post/post.html?post_id=${post.id}">${post.title}</a></h3>
                      <p>${post.body}</p>`;
        postsOl.append(li);
      });

      user.albums.forEach(album => {
        const li = document.createElement('li');
        li.innerHTML = `<h3><a href="">${album.title}</a></h3>`;
        albumsOl.append(li);
      });

      postsOl.prepend(postsH2);
      albumsOl.prepend(albumsH3);
      section.append(postsOl);
      section.append(albumsOl);
      main.append(section);
    });
}

function init() {
  displayHeader();
  renderUserData();
  displayFooter();
}

init();
