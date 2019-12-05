const request = require('request');
const catbreed = process.argv[2];
const url = 'http://api.thecatapi.com/v1/breeds/search?q=' + catbreed;

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data[0].description);
  } else {
    console.log('This breed is not available');
  }
}
);