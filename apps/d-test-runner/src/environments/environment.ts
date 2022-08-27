import { env } from 'process';

export const environment = {
    production: false,
    apiUrl: 'http://localhost:3333',
    adminUsername: env.ADMIN_USERNAME,
    adminPassword: env.ADMIN_PASSWORD,
};
