import fs from 'fs';
import path from 'path';

const directoryPath = path.join(__dirname, './jadibts/');

function cleanSubbotDirectories() {
  fs.readdir(directoryPath, (err, subbotDirs) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    
    subbotDirs.forEach((subbotDir) => {
      const subbotPath = path.join(directoryPath, subbotDir);
      
      fs.readdir(subbotPath, (err, files) => {
        if (err) {
          return console.log('Unable to scan subbot directory: ' + err);
        }

        files.forEach((file) => {
          if (file !== 'creds.json') {
            fs.unlink(path.join(subbotPath, file), (err) => {
              if (err) {
                console.log(`Error deleting file ${file}: ` + err);
              } else {
                console.log(`File ${file} deleted successfully.`);
              }
            });
          }
        });
      });
    });
  });
}

// cada 10 segundos gey de Edar
setInterval(cleanSubbotDirectories, 10 * 1000);

cleanSubbotDirectories();
