import { Request, Response, NextFunction } from 'express';
import { User } from 'database/model/User';

export async function instrumentsGuard(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    // @ts-ignore
    const user: User | null = await User.findByPk(request.session.userId);

    if (user && user.instruments_access) {
      next();
    } else {
      response.status(403).end();
    }
  } catch (error) {
    response.status(500).json(error);
  }
}

export default instrumentsGuard;