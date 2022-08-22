import { Request, Response } from 'express';
import { User } from 'database/model/User';
import { validationResult, Result } from 'express-validator';

export async function register(request: Request, response: Response): Promise<void> {
  const errors: Result = validationResult(request);

  if (!errors.isEmpty()) {
    response.status(400).json({ errors: errors.array() });
  } else {
    try {
      const user: User = await User.create(request.body);
      // @ts-ignore
      request.session.userId = user.id;
      response.send(user);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

export default register;