import { SessionOptions } from 'express-session';

export const sessionOptions: SessionOptions = {
  secret: process.env.SESSION_SECRET || '',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 3 * 365 * 24 * 60 * 60 * 1000, // 3 years
  },
};

export default SessionOptions;