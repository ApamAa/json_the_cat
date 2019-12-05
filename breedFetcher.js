//const httpAddress = process.argv[2];
//const fileAddress = process.argv[3];

const request = require('request');
const catbreed = process.argv[2];
const url = 'http://api.thecatapi.com/v1/breeds/search?q=' + catbreed;

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  const data = JSON.parse(body);
  console.log(typeof data);
  if (data !== []) {
    console.log(data[0].description);
  } else {
    console.log('This breed is not availanle');
  }
}
);