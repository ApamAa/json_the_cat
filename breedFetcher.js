
const request = require('request');
const fetchBreedDescription = function(breedName,callbackfunction) {
  let url = 'http://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    //console.log(body);
    const data = JSON.parse(body);
    if (error === null && data.length !== 0) {
      callbackfunction(null,(data[0].description));
    } else {
      callbackfunction(true,null);
    }
                
  });
            
};

module.exports = {fetchBreedDescription};


