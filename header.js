const pathName = window.location.pathname;

function createPath(path) {
  const pathLength = pathName.split('/').length;
  if (pathLength === (window.location.port ? 3 : 4)) {
    console.log(pathName.split('/').length);
    return `../${path}`;
  }
  return `./${path}`;
}

const navItems = [
  { title: 'Posts', path: createPath('posts/posts.html') },
  { title: 'Albums', path: createPath('albums/albums.html') },
  { title: 'Users', path: createPath('users/users.html') },
];

const header = document.createElement('header');
header.className = 'primary-header';
header.innerHTML = `
<div class="container">
  <div class="primary-header__logo-wrapper">
    <a href=${createPath(
      'index.html'
    )} class="primary-header__logo primary-header__link">JSON-Placeholder</a>
  </div>
  <nav class="primary-navigation">
    <ul role="list" class="nav-list">
  
      </ul>
      </nav>
      <form primary-header__form action="../search/search.html">
        <input primary-header__input type="search" placeholder="search" name="search" />
        <button class="button">Search</button>
      </form>
</div>
`;
document.body.prepend(header);

navItems.map(navItem => {
  const navItemLi = document.createElement('li');
  const navItemLink = document.createElement('a');
  const linkPath = navItem.path.slice(navItem.path.indexOf('/'));

  navItemLi.className = 'primary-header__li';
  navItemLink.className = 'primary-header__link';
  navItemLink.textContent = navItem.title;
  navItemLink.href = navItem.path;

  if (pathName.includes(linkPath)) {
    navItemLink.classList.add('active');
  }

  navItemLi.append(navItemLink);
  document.querySelector('.nav-list').append(navItemLi);
});
