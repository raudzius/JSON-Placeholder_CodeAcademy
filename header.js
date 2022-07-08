const header = document.createElement('header');
header.className = 'main-header';
header.innerHTML = `
      <div class="main-header__logo--wrapper">
        <a href="../index.html" class="main-header__logo">JSON-Placeholder</a>
      </div>
      <nav class="main-nav">
        <ul class="main-nav__ul">
          <li class="main-nav__li"><a href="../users/users.html">Users</a></li>
          <li class="main-nav__li">
            <a href="../albums/albums.html">Albums</a>
          </li>
          <li class="main-nav__li"><a href="../post/post.html">Posts</a></li>
          <li class="main-nav__li">
            <form method="GET" action="../search/search.html">
              <input type="search" placeholder="search" name="search" />
              <input type="submit" />
            </form>
          </li>
        </ul>
      </nav>`;
document.body.append(header);
