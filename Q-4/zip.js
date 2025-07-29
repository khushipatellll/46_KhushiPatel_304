const fs = require('fs');
const zlib = require('zlib');

const sourceFile = 'example.txt';
const compressedFile = 'example.txt.gz';

const input = fs.createReadStream(sourceFile);
const output = fs.createWriteStream(compressedFile);

input. pipe(zlib.createGzip()).pipe(output);

output.on('finish', () => {
    console.log('compressed ${sourceFile} -> ${compressedFile}');
});