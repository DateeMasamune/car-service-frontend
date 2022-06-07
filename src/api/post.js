const axios = require('axios');

async function post(data, url, token) {
  const response = await axios.post(url, data, {
    headers: {
      Authorization: token,
    },
  });
  return response;
}

export default post;
