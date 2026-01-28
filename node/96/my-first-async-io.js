const fs = require('fs');
const buffer = fs.readFile(process.argv[2], 'utf8', getData);
function getData (err, data){
    if(err){
        throw err
    }else{
        console.log(data.split('\n').length - 1)
        return data;
    }

}
