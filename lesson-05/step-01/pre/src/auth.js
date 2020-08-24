export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (/* params here */) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      // headers here
    },
    body: JSON.stringify(/* send the data to the server */)
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};