const environment = process.env.NODE_ENV;
export const isDev = environment === 'development';
export const isProd = environment === 'production';
export const isTest = environment === 'test';
