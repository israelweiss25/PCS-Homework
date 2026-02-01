import http from 'http';

for (let i = 2; i < process.argv.length; i++){
    http.get(process?.argv[i], response => {
        let strData = '';
        response.setEncoding('utf-8');
        response.on('data', data => strData += data);
        response.on('end', () => console.log(strData));
        response.on('error', console.error);
    }).on('error', console.error);
}