const { env } = require('process');

const ADMIN_FIND_QUERY = { name: env.ADMIN_USERNAME, password: env.ADMIN_PASSWORD };

function getUsersCollection(db) {
    return db.collection('users');
}

function findAdmin(db) {
    const usersCollection = getUsersCollection(db);

    return usersCollection.findOne(ADMIN_FIND_QUERY);
}

async function addAdmin(db) {
    const existingAdmin = await findAdmin(db);

    if (existingAdmin) {
        return;
    }

    const usersCollection = getUsersCollection(db);

    usersCollection.insertOne({
        name: env.ADMIN_USERNAME,
        password: env.ADMIN_PASSWORD,
        displayName: env.ADMIN_USERNAME.toUpperCase(),
        status: 0, // Activated Status
        role: 2, // Admin Role
    });
}

function removeAdmin(db) {
    const usersCollection = getUsersCollection(db);

    return usersCollection.deleteOne(ADMIN_FIND_QUERY);
}

module.exports = {
    up(db) {
        return addAdmin(db);
    },

    down(db) {
        return removeAdmin(db);
    },
};
