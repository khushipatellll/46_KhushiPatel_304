const fs = require('fs');
const zlib = require('zlib');

const decompressedFile  = "exampl_unzipfile.txt";
const compressedFile = "../Q-4/example.txt.gz";

const input = fs.createReadStream(compressedFile);
const output = fs.createWriteStream(decompressedFile);

input. pipe(zlib.createGunzip()).pipe(output);

output.on('finish', () => {
    console.log('decompressed ${compressedFile} -> ${decompressedFile}');
});