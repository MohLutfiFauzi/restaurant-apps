import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  IMAGE_RESTAURANT: `${CONFIG.BASE_URL}images/small`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_QUERY: `${CONFIG.BASE_URL}search?q=query`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
