fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(res => res.json())
  .then(postData => {
    postData.forEach(post => {
      const ul = document.createElement('ul');
      const btn = document.createElement('button');
      const div = document.createElement('div');

      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => {
          div.innerHTML = `<h2>${post.title}</h2>
                             <p>${post.body}</p>
                             <div><a href="author.html">${user.name}</a></div>`;
          div.append(btn);
          div.append(ul);
        });

      btn.textContent = 'Comments';
      btn.addEventListener('click', () => {
        fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        ).then(res =>
          res.json().then(commentsData => {
            ul.innerHTML = '';
            commentsData.forEach(comment => {
              const li = document.createElement('li');
              li.innerHTML = `<h3>${comment.name}</h3>
                                   <p>${comment.body}</p>
                                   <div>${comment.email}</div>`;
              ul.prepend(li);
            });
          })
        );

        if (ul.style.display === 'block') {
          ul.style.display = 'none';
        } else {
          ul.style.display = 'block';
        }
      });

      document.body.prepend(div);
    });
  });

fetch('https://jsonplaceholder.typicode.com/albums?_limit=5')
  .then(res => res.json())
  .then(albums => {
    const section = document.createElement('section');
    const ol = document.createElement('ol');
    albums.forEach(album => {
      console.log(album);
      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(author => {
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`
          )
            .then(res => res.json())
            .then(photo => {
              const li = document.createElement('li');
              li.innerHTML = `<h2><a href="album.html">${album.title}</a></h2>
                                      <p>${author.name}</p>
                                      <img src="${photo[0].url}">`;
              ol.append(li);
            });
        });
    });
    section.append(ol);
    document.body.append(section);
  });

//   https://jsonplaceholder.typicode.com
// 1. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   1.1. Pavadinimą.
//   1.2. Pastraipą su įrašo (post) turiniu.
//   1.3. Autorių. Tai turi būti nuoroda. Kol kas ji gali niekur nevesti.
// 2. Po kiekvienu įrašu (post) gali būti komentarų (sukurti variantus įrašui, kuris neturi komentarų, kuris turi vieną komentarą ir kuris turi daugiau nei vieną komentarą). Kiekvienas komentaras turi:
//   2.1. Komentaro pavadinimą.
//   2.2. Komentaro turinį - pastraipą.
//   2.3. Komentarą parašiusio asmens el. pašto adresą.
