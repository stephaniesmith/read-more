const BASE_URL = 'https://www.googleapis.com/books/v1';

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

export function search(term, page, perPage) {
  const bookIndex = (page * perPage) - perPage;
  const url = `${BASE_URL}/volumes?q=${term}&maxResults=${perPage}&startIndex=${bookIndex}`;
  return get(url);
}

export function getBook(id) {
  const url = `${BASE_URL}/volumes/${id}`;
  return get(url);
}