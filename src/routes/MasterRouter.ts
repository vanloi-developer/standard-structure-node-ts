import BaseRouter from './BaseRouter';
import UserRouter from './UserRouter';

import { json, urlencoded } from 'express';
import cors from 'cors';

class MasterRouter extends BaseRouter {
  constructor() {
    super();

    this.initializeMiddleware();

    this.initializeRouting();
  }

  protected initializeMiddleware() {
    this.router.use(json());

    this.router.use(urlencoded({ extended: true }));

    this.router.use(cors());
  }

  protected initializeRouting() {
    this.init();
  }

  protected init() {
    this.router.use(`/services/app/user`, UserRouter);
  }
}

Object.seal(MasterRouter);

export = new MasterRouter().router;
