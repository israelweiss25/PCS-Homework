import http from 'http';

http.get(`http://127.0.0.1:5500/97/${process.argv[2]}`, response => {
    response.setEncoding('utf-8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);
