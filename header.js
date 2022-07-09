const header = document.createElement('header');
header.className = 'main-header';
header.innerHTML = `
      <div class="main-header__logo-wrapper">
        <a href="../index.html" class="main-header__logo main-header__link">JSON-Placeholder</a>
      </div>
      <nav class="main-header__nav">
        <ul class="main-header__ul">
          <li class="main-header__li"><a class="main-header__link" href="../users/users.html">Users</a></li>
          <li class="main-header__li">
            <a class="main-header__link" href="../albums/albums.html">Albums</a>
          </li>
          <li class="main-header__li"><a class="main-header__link" href="../posts/posts.html">Posts</a></li>
          <li class="main-header__li">
            <form main-header__form action="../search/search.html">
              <input main-header__input type="search" placeholder="search" name="search" />
              <input main-header__input type="submit" />
            </form>
          </li>
        </ul>
      </nav>`;
document.body.prepend(header);
