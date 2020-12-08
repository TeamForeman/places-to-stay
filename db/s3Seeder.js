const faker = require('faker');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const url = faker.image.abstract();

// Make images folder in root of this project

for (let i = 1; i <= 1000; i ++) {
  const writeStream = fs.createWriteStream(path.join(__dirname,'../images', `${i}.jpg`));
  axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  })
  .then((response) => {
    response.data.pipe(writeStream);
  });
}

// Copy your images folder into a public S3 bucket after you seed it.