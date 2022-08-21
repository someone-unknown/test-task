import { body, ValidationChain } from 'express-validator';

export const userValidation: ValidationChain[] = [
  body('email').exists().notEmpty().isEmail(),
  body('password').exists().notEmpty(),
];

export default userValidation;