import { SessionOptions } from 'express-session';

export const sessionOptions: SessionOptions = {
  secret: '2PixqI3Ppvv8rCkMcIGIimrPukO7d0UGqFlWS6hQ',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 3 * 365 * 24 * 60 * 60 * 1000, // 3 years
  },
};

export default SessionOptions;