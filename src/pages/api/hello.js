export const getAuthToken = () => {
  return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
  window.localStorage.setItem('auth_token', token);
};

const baseURL = 'http://localhost:8888';

export const request = async (method, url, data) => {
  const headers = new Headers();

  if (getAuthToken() !== null && getAuthToken() !== 'null') {
    headers.append('Authorization', `Bearer ${getAuthToken()}`);
  }

  const requestOptions = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  return await fetch(`${baseURL}${url}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Request error:', error);
    });
};
