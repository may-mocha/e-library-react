import queryString from "query-string";

const routeConfig = {
  login: 'auth/token',
  getDictionary: 'dictionary',
  getProductById: '/product/:id',
  // getProductById: '/product/:id/cate/:cateid',
};

export const getEndpointUrl = (endpointKey, params = {}) => {
  const endpoint = routeConfig[endpointKey];
  let url = endpoint;
  for (const [key, value] of Object.entries(params)) {
    url = url.replace(`:${key}`, value);
  }
  return url;
};

export const routeFilter = (params) => {
  let str = queryString.stringify(params, {
    skipNull: true,
    arrayFormat: 'comma',
  })
  return str !== '' ? `?${str}` : str
}