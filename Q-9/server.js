const fs = require('fs');
const path = require('path');

    // 1. Create a new file
    fs.writeFile('file1.txt', 'Hello, this is the Node File for Created documentation.\n', (err) => {
    if (err) throw err;
    console.log('File created successfully.');

    // 2. Append more data to the file
    fs.appendFile('file1.txt', 'This is additional content.\n', (err) => {
    if (err) throw err;
    console.log('Content appended.');

    // 3. Read the file
    fs.readFile('file1.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File content:\n' + data);

     // 4. Rename the file
      fs.rename('file1.txt', 'renamed.txt', (err) => {
        if (err) throw err;
        console.log('File renamed.');

        // 5. Check if file exists
        if (fs.existsSync('renamed.txt')) {
          console.log('File exists.');

          // 6. Create a directory
          const dir = 'myFolder';
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log('Directory created.');
          }

          // 7. Move file into the new directory
          fs.rename('renamed.txt', path.join(dir, 'renamed.txt'), (err) => {
            if (err) throw err;
            console.log('File moved to folder.');

            // 8. List files in the directory
            fs.readdir(dir, (err, files) => {
              if (err) throw err;
              console.log('Files in directory:', files);

              // 9. Delete the file
              fs.unlink(path.join(dir, 'renamed.txt'), (err) => {
                if (err) throw err;
                console.log('File deleted.');
              });
            });
          });
        }
      });
    });
  });
});