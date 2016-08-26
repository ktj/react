var serverPort=9000, 
    webDir="../wwwroot";

var express = require('express');
var webSocketServer=require('./websocket');
var webApi=require('./webapi');
const path = require('path');

var app = express();
app.use(express.static(webDir));

webSocketServer(serverPort+1)
webApi.init(app);

app.get('*', function(request,response){
	response.sendFile(path.resolve(__dirname, webDir+'/pages','index.html'))
});

app.listen(serverPort);
console.log('Server listening on http://localhost:'+serverPort);
console.log('Distributing site from: '+webDir);