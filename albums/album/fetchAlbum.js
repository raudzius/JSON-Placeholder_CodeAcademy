async function fetchAlbum() {
  const albumId = new URLSearchParams(location.search).get('album_id');
  return await (await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`)).json();
}

export default fetchAlbum;
