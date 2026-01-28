const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) =>{
    if(err){
        return;
    }else{
        files.filter(file => path.extname(file) === `.${process.argv[3]}`)
        .forEach(file => console.log(file));
    }
});
