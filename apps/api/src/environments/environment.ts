import { env } from 'process';

export const environment = {
    production: false,
    mongoURI: env.MONGO_URI,
    mongoDBName: env.MONGO_DB_NAME,
    jwtSecret: env.JWT_SECRET,
    jwtExpiresIn: env.JWT_EXPIRE_TIME,
};
