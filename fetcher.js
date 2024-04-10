const request = require('request');
const fs = require('fs');

const website = process.argv[2];
const filePath = process.argv[3];

request(website, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.log("Error");
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
  
  
});
