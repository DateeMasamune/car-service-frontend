const axios = require('axios');

async function put(data, url, token) {
  const response = await axios.put(url, data, {
    headers: {
      Authorization: token,
    },
  });
  return response;
}

export default put;
