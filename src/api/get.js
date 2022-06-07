const axios = require('axios');

async function get(url, token) {
  const response = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
  return response;
}

export default get;
