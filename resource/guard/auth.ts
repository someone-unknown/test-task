import { Request, Response, NextFunction } from 'express';
import { User } from 'database/model/User';

export async function authGuard(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    // @ts-ignore
    if (await User.findByPk(request.session.user)) {
      next();
    } else {
      response.status(403).end();
    }
  } catch (error) {
    response.status(500).json(error);
  }
}

export default authGuard;