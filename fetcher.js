
const fs = require('fs');

const request = require('request');

const domain = process.argv[2];
const path = process.argv[3];

const writeFile = function() {
  request(domain, (error, response, body) => {
    if (error) {
      console.log('Invalid URL');
      process.exit();
    };

    fs.writeFile(path, body, error => {
      if (error) {
        console.log('error, did not write');
        process.exit();
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  });
};

writeFile();
// Downloaded and saved 1235 bytes to ./index.html.

