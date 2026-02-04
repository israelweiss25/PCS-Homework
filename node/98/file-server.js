import http from 'http'; 
import fs from 'fs';

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);