const header = document.createElement('header');
header.className = 'primary-header';
header.innerHTML = `
<div class="container">
  <div class="primary-header__logo-wrapper">
    <a href="../index.html" class="primary-header__logo primary-header__link">JSON-Placeholder</a>
  </div>
  <nav class="primary-navigation">
    <ul role="list" class="nav-list">
      <li class="primary-header__li"><a class="primary-header__link" href="../users/users.html">Users</a></li>
      <li class="primary-header__li">
        <a class="primary-header__link" href="../albums/albums.html">Albums</a>
      </li>
      <li class="primary-header__li"><a class="primary-header__link" href="../posts/posts.html">Posts</a></li>
      </ul>
      </nav>
      <form primary-header__form action="../search/search.html">
        <input primary-header__input type="search" placeholder="search" name="search" />
        <button class="button">Search</button>
      </form>
</div>
`;
document.body.prepend(header);
console.dir(window.location)