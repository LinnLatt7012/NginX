const http = require("http");
const WebSocketServer = require("websocket").server;
const httpServer = http.createServer();
const websocketServer = new WebSocketServer(
		{"httpServer":httpServer}
)
// let connection = null;
const PORT = process.argv[2] || 8080;
httpServer.listen(PORT,()=>console.log(`running on ${PORT}`))

websocketServer.on("request",function(request) {
    // console.log(request);
    const connection = request.accept(null,request.origin)
    connection.on("message", data=>{
        console.log(`hey I received a message ${data.utf8Data}`);
        connection.send(`Hey! I recevied your message  ${data.utf8Data} from ${PORT}`);
    })
})