import BaseRouter from './BaseRouter';

class SessionRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  protected init() {
    this.router.get('/getCurrentLoginInformations', (req, res, next) => {
      res.status(200).json({
        message: `Return current login informations`,
      });
    });
  }
}

Object.seal(SessionRouter);
export = new SessionRouter().router;
