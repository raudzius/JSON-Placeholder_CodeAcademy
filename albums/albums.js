import { displayHeader } from '../header.js';
import { displayFooter } from '../footer.js';
import renderAlbums from './renderAlbums.js';

function init() {
  displayHeader();
  renderAlbums();
  displayFooter();
}

init();
