const { env } = require('process');

module.exports = {
    async up(db) {
        db.collection('users').insertOne({
            name: env.ADMIN_USERNAME,
            password: env.ADMIN_PASSWORD,
            displayName: env.ADMIN_USERNAME.toUpperCase(),
            status: 0, // Activated Status
            role: 2, // Admin Role
        });
    },

    async down(db) {
        db.collection('users').deleteOne({
            name: env.ADMIN_USERNAME,
            password: env.ADMIN_PASSWORD,
        });
    },
};
