const axios = require('axios');

async function deleteQ(url, token) {
  const response = await axios.delete(url, {
    headers: {
      Authorization: token,
    },
  });
  return response;
}

export default deleteQ;
