const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 8080;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://bloxd.io/');
    if (response.status !== 200) {
      // Check for non-200 status codes
      throw new Error(`Failed to fetch Bloxd.io (status ${response.status})`);
    }
    const html = response.data;
    const $ = cheerio.load(html);

    // Remove ads (likely won't work due to cross-origin policies)
    $('.HomeBannerInner, .GoogleActiveViewElement').remove();

    // Change title
    $('title').text('Leap Client for Bloxd.io');

    // Add custom settings (example)
    $('.SettingsCategoriesList').append('<div>Leap Client Settings</div>');


    res.setHeader('Content-Type', 'text/html'); // Set Content-Type header
    res.send($.html());
  } catch (error) {
    console.error("Error:", error.message); // Log the specific error message
    res.status(500).send("Error loading Bloxd.io");
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
