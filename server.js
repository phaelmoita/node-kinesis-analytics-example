const
    http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/book', require('./api/book'));

server.listen(process.env.PORT || 9090, process.env.IP || "0.0.0.0", () => {
  var addr = server.address();
  console.log("node kinesis server listening at", addr.address + ":" + addr.port);
});

module.exports = server;