import express, { Router } from 'express';
import fs from 'fs';
import hpp from 'hpp';
import helmet from 'helmet';
import path from 'path';
const keys = require('./keys');
export default class App {
  private _app: express.Application = express();
  private _server = this._app.listen(keys.port);
  private _router = Router();
  constructor() {
    this.loadSettings();
    this.applyMiddlewares();
    this.loadRoutes();
  }
  private applyMiddlewares() {
    this._app.use(helmet());
    this._app.use(hpp());
    this._app.use(express.static(path.resolve(__dirname, 'public')));
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(express.json());
  }
  private loadRoutes() {
    fs.readdirSync(path.resolve(__dirname, 'routes')).map((route) =>
      require(path.join(__dirname, 'routes', route))(this._router)
    );
    this._app.use(this._router);
  }
  private loadSettings() {
    this._app.set('view engine', 'pug');
    this._app.set('views', path.resolve(__dirname, 'views'));
  }
  get app() {
    return this._app;
  }
  get server() {
    return this._server;
  }
  get router() {
    return this._router;
  }
}
