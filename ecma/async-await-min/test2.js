/*
Let's say we want to get some JSON file from server.
We will write a function that uses the axios library and
sends a HTTP GET request to https://tutorialzine.com/misc/files/example.json.
We have to wait for the server to respond, so naturally this HTTP request will be asynchronous.
 */

const axios = require('axios');

/*
Promise approach
 */

function getJSON() {
  // return new Promise(function(resolve) {
  //   axios.get('https://tutorialzine.com/misc/files/example.json').then(function(json) {
  //     resolve(json.data);
  //   });
  // });

  return axios.get('https://tutorialzine.com/misc/files/example.json').then(function(json) {
    return json.data;
  });
}

getJSON().then(person => {
  console.log(person.map(item => item.name));
  console.log();
});

/*
Async/Await approach
 */

async function getJSONAsync() {
  let json = await axios.get('https://tutorialzine.com/misc/files/example.json');
  return json.data;
}

getJSONAsync().then(person => console.log(person.map(item => item.name)));

/*
then-cb-function 구문은 await 와 같다.
 */
