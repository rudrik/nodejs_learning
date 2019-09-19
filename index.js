const fs = require('fs');
const http = require('http');
const url = require('url');
/////////////////////////////////////////////////////////////
///////////// FILES

// const textIn = fs.readFileSync('./txt/sample.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the nothing: \n Created on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);
// fs.readFile('./txt/output.txt', 'utf-8', (error, data) => {
//     console.log(`Done reading a file with following content ${data}`);
//     fs.readFile('./txt/sample.txt', 'utf-8', (error, data1) => {
//         console.log(`Another data is as following: ${data1}`);
//     });
// });
// console.log('Reading a File');



//////////////////////////////
///// SERVER


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);


const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the overview');
    } else if (pathName === '/product') {
        res.end('This is the product');
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page could not be found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000.');
});