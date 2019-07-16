import express from "express";

export default class App {
    private _expressApp: express.Application;

    constructor() {
        this.configure();
    }

    get expressApp() {
        return this._expressApp;
    }

    public configure() {
        this._expressApp = express();
        this._expressApp.set("port", process.env.PORT || 3000);

        this._expressApp.get('/', (request: any, response: any) => {
            response.send("hello world");
        });

        this._expressApp.get('/login', (request: any, response: any) => {
            response.send('login endpoint');
        });
    }
}
