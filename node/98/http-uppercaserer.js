import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {

    req.method === 'POST' && req.on('data', data => res.write(data.toString().toUpperCase()));
    
}).listen(process.argv[2]);