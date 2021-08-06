import express, { Application, Router } from 'express';

class Server {
  public _app: Application = express();
  public _routes: Router = express.Router();
}

Object.seal(Server);
export = Server;
