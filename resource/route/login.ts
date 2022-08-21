import { createHash } from 'crypto';
import { Request, Response } from 'express';
import { User } from 'database/model/User';
import { validationResult, Result } from 'express-validator';

export async function login(request: Request, response: Response): Promise<void> {
  const errors: Result = validationResult(request);

  if (!errors.isEmpty()) {
    response.status(400).json({ errors: errors.array() });
  } else {
    try {
      const user: User | null = await User.findOne({ where: {
        email: request.body.email,
        password: createHash('sha256').update(request.body.password).digest('hex'),
      } });

      if (user) {
        // @ts-ignore
        request.session.userId = user.id;
        response.send(user);
      } else {
        response.status(403).end();
      }
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

export default login;