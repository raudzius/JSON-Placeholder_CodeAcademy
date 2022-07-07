const body = document.body;
const postsSection = document.getElementById('posts-section');
const albumsSection = document.getElementById('albums-section');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
  .then(res => res.json())
  .then(postData => {
    const postsOl = document.createElement('ol');
    postsOl.className = 'posts-ol';

    postData.forEach(post => {
      const postsLi = document.createElement('li');
      const commentsOl = document.createElement('ol');
      const commentsBtn = document.createElement('button');
      commentsBtn.textContent = 'Comments';
      commentsBtn.className = 'button';
      postsLi.className = 'posts-li';

      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => {
          postsLi.innerHTML = `<h3>${post.title}</h3>
                             <p>${post.body}</p>
                             <a href="./user/user.html?user_id=${post.userId}">${user.name}</a>`;
          postsLi.append(commentsBtn);
          postsLi.append(commentsOl);
        });

      commentsBtn.addEventListener('click', () => {
        fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        ).then(res =>
          res.json().then(commentsData => {
            commentsOl.innerHTML = '';
            commentsData.forEach(comment => {
              const commentsLi = document.createElement('li');
              commentsLi.className = 'comments-li';
              commentsLi.innerHTML = `<h4>${comment.name}</h4>
                                   <p>${comment.body}</p>
                                   <div>${comment.email}</div>`;
              commentsOl.prepend(commentsLi);
            });
          })
        );

        if (commentsOl.style.display === 'block') {
          commentsOl.style.display = 'none';
        } else {
          commentsOl.style.display = 'block';
        }
      });

      postsOl.append(postsLi);
    });
    postsSection.append(postsOl);
  });

fetch('https://jsonplaceholder.typicode.com/albums?_limit=15')
  .then(res => res.json())
  .then(albums => {
    const albumsOl = document.createElement('ol');
    albumsOl.className = 'albums-ol';

    albums.forEach(album => {
      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(author => {
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`
          )
            .then(res => res.json())
            .then(photo => {
              const albumsLi = document.createElement('li');
              albumsLi.className = 'albums-li';
              albumsLi.innerHTML = `<div class="img-wrapper"><img src="${photo[0].thumbnailUrl}"></div>
                                    <a href="./album/album.html?album_id=${album.id}">${album.title}</a>
                                    <p>${author.name}</p>`;
              albumsOl.append(albumsLi);
            });
        });
    });
    albumsSection.append(albumsOl);
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
// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
//   8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
// 9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html).
//   9.1. Prie kiekvieno albumo turi būti:
//     9.1.1. Parašytas jo pavadinimas.
//     9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//     9.1.3. Albume esančių nuotraukų skaičius.
//     9.1.4. Viena nuotrauka
// 10. Sukurti navigacijos elementą, kuris nukreips į puslapius:
//   10.1. Home / pagrindinis puslapis.
//   10.2. Users / vartotojų puslapis.
//   10.3. Albums / albumų puslapis.
//   10.4. Posts / pranešimų puslapis.
