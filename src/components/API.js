const API_KEY = '35293905-dc99b5737d2ab8084be15efcb';

export const fetchImages = (query, page = 1) => {
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !data.hits || data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    });
};

export const fetchMoreImages = (query, page) => {
  const nextPage = page + 1;
  return fetchImages(query, nextPage);
};