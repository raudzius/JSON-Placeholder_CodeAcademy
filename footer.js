const footer = document.createElement('footer');

function createPath(path) {
  const pathLength = pathName.replace().split('/').length;
  if (pathLength === (window.location.port ? 3 : 4)) {
    return `../${path}`;
  }
  return `./${path}`;
}

footer.classList.add('bg-neutral-100');
footer.innerHTML = `
      <div class="container">
          <div class="footer-social">
            <a href="" class="primary-header__logo">JSON-Placeholder</a>
            <ul role="list" aria-label="Social links" class="social-links">
            <li><a aria-label="facebook" href="#"><img src=${createPath(
              'icons/icon-facebook.svg'
            )} alt="Facebook"></a></li>
            <li><a aria-label="youtube" href="#"></a><img src=${createPath(
              'icons/icon-youtube.svg'
            )} alt="Youtube"></li>
            <li><a aria-label="twitter" href="#"></a><img src=${createPath(
              'icons/icon-twitter.svg'
            )} alt="Twitter"></li>
            <li><a aria-label="pinterest" href="#"><img src=${createPath(
              'icons/icon-pinterest.svg'
            )} alt="Pinterest"></a></li>
            <li><a aria-label="instagram" href="#"><img src=${createPath(
              '/icons/icon-instagram.svg'
            )} alt="Instagram "></a></li>
            </ul>
          </div>
            <nav class="footer-nav">
              <ul aria-label="Footer" role="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Albums</a></li>
                <li><a href="#">Users</a></li>
                </ul>
                <ul>
                <li><a href="#">Search</a></li>
                <li><a href="#">Create Post</a></li>
                <li><a href="#">Privacy Policy</a></li>
                </ul>
            </nav>
          <div class="footer-form__div">
            <form>
              <input class="fs-400" type="email" placeholder="updates in your inbox..." />
              <button class="button">Go</button>
            </form>
            <p class="fs-400">Copyright 2022. All Rights Reserved</p>
          </div>
      </div>
`;

document.body.append(footer);
