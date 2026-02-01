import http from 'http';

http.get(`${process.argv[2]}`, response => {
    let strData = ''
    response.setEncoding('utf-8');
    response.on('data', data => strData += data);
    response.on('error', console.error);
    response.on('end', () => { console.log(strData.length); console.log(strData);})
})