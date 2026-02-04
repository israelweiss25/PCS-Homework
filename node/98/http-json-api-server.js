import http from 'http';

http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${process.argv[2]}`);
    let data;

    if (url.pathname === '/api/unixtime') {
        data = {
            "unixtime": new Date(url.searchParams.get('iso')).getTime()
        }
    }
    if (url.pathname === '/api/parsetime') {
        const dateArr = new Date(url.searchParams.get('iso')).toLocaleTimeString('en-GB').split(':');

        data = {
            "hour": + dateArr[0],
            "minute":+ dateArr[1],
            "second":+ dateArr[2]
        }
    }
    res.end(JSON.stringify(data));

}).listen(process.argv[2]);



// http.get('http://localhost:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z', (res) => {
//     let data = '';

//     res.on('data', chunk => {
//         data += chunk;
//     });

//     res.on('end', () => {
//         console.log(data);
//     });
// });
