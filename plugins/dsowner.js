import fs from 'fs';

const sanSessionPath = './BotSession/';

function cleanPrekeys() {
  fs.readdir(sanSessionPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan SanSession directory: ' + err);
    }

    files.forEach((file) => {
      if (file.includes('prekeys')) {
        fs.unlink(`${sanSessionPath}${file}`, (err) => {
          if (err) {
            console.log(`Error deleting file ${file}: ` + err);
          } else {
            console.log(`File ${file} deleted successfully.`);
          }
        });
      }
    });
  });
}

// cada 10 seg por el momento.
setInterval(cleanPrekeys, 60 * 1000);

cleanPrekeys();
