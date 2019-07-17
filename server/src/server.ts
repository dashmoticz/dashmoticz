import App from './app'

class Server {
    private readonly http: any;
    private app: App;

    constructor() {
        this.app = new App();
        this.http = require("http").Server(this.app.expressApp);
        const io = require("socket.io")(this.http);

        // whenever a user connects on port 3000 via
        // a websocket, log that a user has connected
        io.on('connection', function(socket: any) {
            console.log("a user connected");
            // whenever we receive a 'message' we log it out
            socket.on("message", function(message: any) {
                console.log(message);
            });
        });
    }

    public start() {
        this.http.listen(this.app.expressApp.get('port'), () => {
            console.log(
                "  App is running at http://localhost:%d in %s mode",
                this.app.expressApp.get("port"),
                this.app.expressApp.get("env")
            );
            console.log("  Press CTRL-C to stop\n");
        });
    }
}

const server = new Server();
server.start();

