const footer = document.createElement('footer');
footer.classList.add('bg-neutral-900', 'text-neutral-100');
footer.innerHTML = `
      <div class="container">
        <div class="even-columns">
          <div>
            <a href="">Logo</a>
            <ul role="list" aria-label="Social links">
              <li><a aria-label="facebook" href="#"></a></li>
              <li><a aria-label="youtube" href="#"></a></li>
              <li><a aria-label="twitter" href="#"></a></li>
              <li><a aria-label="pinterest" href="#"></a></li>
              <li><a aria-label="instagram" href="#"></a></li>
            </ul>
          </div>
          <div>
            <nav class="footer-nav">
              <ul aria-label="Footer" role="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Albums</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Create Post</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <form>
              <input type="email" />
              <button class="button">Go</button>
            </form>
            <p>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
`;

document.body.append(footer);
