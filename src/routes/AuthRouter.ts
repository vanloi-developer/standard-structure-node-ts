import BaseRouter from './BaseRouter';

class AuthRoutes extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  protected init() {}
}

Object.seal(AuthRoutes)
export = new AuthRoutes().router