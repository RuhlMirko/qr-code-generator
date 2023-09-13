/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: 'url',
      message: 'Input an URL'
    },
  ])
  .then(answers => {
    var url = answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('url_qr.png'));

    /*
    try fs.appendFile('message.txt', 'data to append', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    */
    fs.writeFile('log.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 


  });

