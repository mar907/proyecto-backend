const axios = require("axios");

async function getCat(limit = 10) {
  if (limit < 1 || limit > 10) {
    throw new Error("Invalid limit. It must be between 1 and 10.");
  }
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`
  );

  console.log({ res: response.data });
  return response.data;
}

module.exports = { getCat };
