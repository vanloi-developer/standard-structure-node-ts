import config from './configs/app';
import Server from './server';
import MongooseConnection from './dataAccess';

interface IApplication {
  _server: Server;
}

class Application implements IApplication {
  public _server: Server;

  constructor() {
    this._server = new Server();
  }

  async accessDatabase() {
    await MongooseConnection.connect();
  }

  start() {
    ((port = config.APP_PORT || 5007) => {
      this._server._app.listen(port, () => console.log(`Server is running at ${config.APP_HOST}:${port}`));
      this._server._app.use('/api', this._server._routes);
    })();
  }
}

Object.seal(Application);
export = Application;
