const API_KEY = "23095971-ceaeacbf51a21ad754e50720c";
const BASE_URL = "https://pixabay.com/api/";

function fetchApi(query, page) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) return response.json();

    return Promise.reject(new Error(`Нет картинки ${query}`));
  });
}

export default fetchApi;
