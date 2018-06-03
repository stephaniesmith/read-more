// const BASE_URL = 'https://www.googleapis.com/books/v1';
// const VOLUMES_URL = `${BASE_URL}/volumes?`;
// const SORT_QUERY = 'orderBy=relevance';

// const throwJson = json => { throw json; };
// const get = url => fetch(url)
//   .then(r => r.ok ? r.json() : r.json().then(throwJson));

// export function search({ topic, sources = ['bad'] }, { page = 1, pageSize = 10 }) {
//   const bookIndex = (page * pageSize) - pageSize;
//   const search = `&q=${topic}&sources=${sources.join()}`;
//   const maxResults = `&maxResults=${pageSize}`;
//   const sort = `&${SORT_QUERY}`;
//   const startIndex = `&startIndex=${bookIndex}`;

//   return get(`${VOLUMES_URL}${search}${maxResults}${sort}${startIndex}`);
// }

const BASE_URL = 'https://www.googleapis.com/books/v1';

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

export function search(term) {
  const url = `${BASE_URL}/volumes?q=${term}`;
  return get(url);
}