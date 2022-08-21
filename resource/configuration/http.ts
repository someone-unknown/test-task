interface HttpOptions {
  port: number;
  hostname: string;
}

export const httpOptions: HttpOptions = {
  port: process.env.NODE_ENV === 'production' ? 80 : 8080,
  hostname: '0.0.0.0',
};

export default httpOptions;