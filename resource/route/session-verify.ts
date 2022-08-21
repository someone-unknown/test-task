import { Request, Response } from 'express';

export async function sessionVerify(request: Request, response: Response): Promise<void> {
  response.status(204).end();
}

export default sessionVerify;