import { env } from 'process';

export const environment = {
    production: true,
    mongoURI: env.MONGO_URI,
    jwtSecret: env.JWT_SECRET,
    jwtExpiresIn: env.JWT_EXPIRE_TIME,
};
