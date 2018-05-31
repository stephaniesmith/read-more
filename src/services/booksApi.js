const BASE_URL = 'https://www.googleapis.com/books/v1';
const VOLUMES_URL = `${BASE_URL}/volumes?`;
const SORT_QUERY = 'sortBy=title';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ topic, sources = ['bad'] }, { page = 1, pageSize = 20 }) {
  const search = `&q=${topic}&sources=${sources.join()}`;
  const paging = `&page=${page}&pageSize=${pageSize}`;
  const sort = `&${SORT_QUERY}`;

  return get(`${VOLUMES_URL}${search}${paging}${sort}`);
}