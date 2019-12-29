const http = require('http');

// Create Server Object
http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server running...'));