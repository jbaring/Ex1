const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://covid19-api-philippines.herokuapp.com/api/summary?region=region%20vii:%20central%20visayas')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
 

