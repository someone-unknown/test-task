import { body, ValidationChain } from 'express-validator';

export const userValidator: ValidationChain[] = [
  body('email').exists().notEmpty().isEmail(),
  body('password').exists().notEmpty(),
];

export default userValidator;