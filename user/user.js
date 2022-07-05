const userId = new URLSearchParams(location.search).get('user_id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(res => res.json())
  .then(user => {
    const body = document.body;
    body.innerHTML = `<div id="user"><h2>${user.name}</h2>
                      <p>Username: ${user.username}<p>
                      <p>Email: ${user.email}</p>
                      <p>Adress: <a>${user.address.street}, ${user.address.suite}, ${user.address.city}, zip: ${user.address.zipcode}</a></p>
                      <p>Phone: ${user.phone}</p>
                      <p>Website: ${user.website}</p>
                      <p>Company: ${user.company.name}</p></div>`;
    document.querySelector('a').setAttribute(
      'href',
      `https://www.google.com/maps/place/37%C2%B018
          57.2%22S+81%C2%B008
          58.6%22E/@${user.address.geo.lat},${user.address.geo.lng},6.5z/data=!4m2!3m1!1s0x0:0x39e931c3f0a55e62`
    );

    const postsH3 = document.createElement('h2');
    postsH3.textContent = 'Posts';
    const postsOl = document.createElement('ol');
    postsOl.prepend(postsH3);
    body.append(postsOl);

    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(res => res.json())
      .then(posts => {
        posts.forEach(post => {
          const li = document.createElement('li');
          li.innerHTML = `<h3><a href="">${post.title}</a></h3>
                          <p>${post.body}</p>`;
          postsOl.append(li);
        });
      });

    const albumsH3 = document.createElement('h2');
    albumsH3.textContent = 'Albums';
    const albumsOl = document.createElement('ol');
    albumsOl.prepend(albumsH3);
    body.append(albumsOl);

    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
      .then(res => res.json())
      .then(albums => {
        albums.forEach(album => {
          const li = document.createElement('li');
          li.innerHTML = `<h3><a href="">${album.title}</a></h3>`;
          albumsOl.append(li);
        });
      });
  });

// 3. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//   3.1. Pilnas vardas.
//   3.2. Vartotojo vardas / nick'as.
//   3.3. El. paštas.
//   3.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   3.5. Telefono numeris.
//   3.6. Internetinio puslapio adresas.
//   3.7. Įmonės, kurioje dirba, pavadinimas.
// 4. Šiame puslapyje turės būti atvaizduojama:
//   4.1. Visi vartotojo parašyti įrašai (posts). Post'ų įrašuose nereikia atvaizduoti komentarų. Kiekvienas post'as turi turėti nuorodą.
//   4.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės:
//     4.2.1. Albumo pavadinimą, kuris turi būti nuoroda. Kol kas nuoroda gali niekur nevesti.
