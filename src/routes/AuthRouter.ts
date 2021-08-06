import BaseRouter from './BaseRouter';

class AuthRoutes extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  protected init() {
    this.router.post('/Authenticate', (req, res, next)=> {
      res.status(200).json({
        message: `Current login info`
      })
    })
  }
}

Object.seal(AuthRoutes)
export = new AuthRoutes().router