var fs = require('fs');

fs.readFile(`${__dirname}/1.txt`, (err, data) => {
     if(err) {throw err};
     console.log(data.toString());
})
