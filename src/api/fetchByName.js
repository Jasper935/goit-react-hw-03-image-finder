import axios from 'axios';
const KEY = '28345018-0c1af10fb3ec556a31002db0e';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchByName(name, page) {





  const params = {
    url: BASE_URL,
    params: {
      key: KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: name,
      per_page: 12,
    },
  };

  return await axios(params);


}
export { fetchByName }