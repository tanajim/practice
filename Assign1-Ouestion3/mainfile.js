const fs = require("fs");

let stream;

// reading a file with createReadStream()

const path = "./files/file.txt";
const re = (data,callback) => {

    stream = fs.createReadStream(data);

    stream.on('error', function (error) {
        callback(`error: ${error.message} Some error exist`);
    })

    stream.on('data', (chunk) => {
        callback(chunk);
    })
}

re(path,(data)=>{
     console.log(`${data}`);
});






// writing to a file with pipes

var readStream = fs.createReadStream('./files/file.txt');
var writeStream = fs.createWriteStream('./files/writefl.txt');
readStream.pipe(writeStream);