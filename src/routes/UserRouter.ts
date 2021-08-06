import { NextFunction, Request, Response } from 'express';
import BaseRouter from './BaseRouter';

class UserRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  protected init() {
    this.router.post('/create', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
        success: true,
        message: `Create new User`,
      });
    });

    this.router.post('/getAllPagging', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
        success: true,
        message: `getAllPagging`,
      });
    });

    this.router.get('/getUserNotPagging', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
        success: true,
        message: `getUserNotPagging`,
      });
    });

    this.router.get('/getAll', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
        success: true,
        message: `get all user`,
      });
    });

    this.router.put('/update', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
        success: true,
        message: `update user`,
      });
    });
  }
}

Object.seal(UserRouter);
export = new UserRouter().router;
