const express = require("express");
const cors = require('cors');
const axios = require('axios');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://color-extractor-for-apparel-2.p.rapidapi.com/colors',
        params: {
          image_url: 'https://picsum.photos/200'
        },
        headers: {
          'X-RapidAPI-Key': 'REDACTED-RAPIDAPI-KEY',
          'X-RapidAPI-Host': 'color-extractor-for-apparel-2.p.rapidapi.com'
        }
      };
      

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Call the async function
fetchData();

