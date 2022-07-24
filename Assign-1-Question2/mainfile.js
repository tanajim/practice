const fs = require('fs');

// checking if it is directory or a file

console.log("lets go get file info ");

const info = fs.stat('./files/file.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data);
    console.log("Got file info");

    // Checking file type
    console.log("is File ? " + (data.isFile() ? 'Yes' : 'No'));
    console.log("is Directory ? " + (data.isDirectory() ? 'Yes' : 'No'));
});

console.log(info);



// for reading contents of a file
fs.readFile('./files/file.txt', 'utf8', function(err, data){
      if(err){
        console.log(`${err} Sometime got error`);
        return ;
      }
    // Display the file content
    console.log(data);
});
