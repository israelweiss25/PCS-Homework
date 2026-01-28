const fs = rquire('fs');
const path =rquire('path')
module.export = function (file, ext, readFilter){
}
function readFilter(err, files) {
    if(err){
        return;
    }else{
        files.filter(file => path.extname(file) === `.${process.argv[3]}`)
        .forEach(file => console.log(file));
    }
}