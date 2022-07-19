import { displayHeader } from '../../header.js';
import { displayFooter } from '../../footer.js';
import renderAlbum from './renderAlbum.js';

function init() {
  displayHeader();
  renderAlbum();
  displayFooter();
}

init();
