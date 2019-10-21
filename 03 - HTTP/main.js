var http = require('http')

http.createServer(function (req, res) {
    res.end("Accessing server")
}).listen(8081)

console.log("Server running!")
