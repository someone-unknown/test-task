import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

export default corsOptions;