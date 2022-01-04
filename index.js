const axios = require('axios');

axios.get('https://covid19-api-philippines.herokuapp.com/api/summary?region=')
.then(function (response) {
  console.log('Covid results last updated: ' , response.data.last_update);
  console.log('Active: ' , response.data.data.active_cases);
  console.log('Recovered: ' , response.data.data.recoveries);
  console.log('Died:', response.data.data.deaths);
});

