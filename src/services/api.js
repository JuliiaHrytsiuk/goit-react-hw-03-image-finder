const API_KEY = "23095971-ceaeacbf51a21ad754e50720c";
const BASE_URL = "https://pixabay.com/api";

export function fetchImages(searchImages, page) {
  return fetch(
    `${BASE_URL}/?q=${searchImages}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("No images found"));
  });
}
