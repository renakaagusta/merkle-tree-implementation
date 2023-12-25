const axios = require('axios');
const niceList = require('../utils/niceList.json');

const serverUrl = 'http://localhost:1225';

async function main() {
  const name = niceList[2]
  
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    'name': name
  });

  console.log({ gift });
}

main();