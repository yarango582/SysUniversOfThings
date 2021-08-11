const db = require('./index')
const debug = require('debug')('Suot-db => db:setup');

async function setup() {
    const config = {
        database: process.env.DB_NAME || 'suotdb',
        username: process.env.DB_USERNAME || 'yarangodev',
        password: process.env.DB_PASSWORD || '1088327285*Ye',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
        loggin: s => debug(s),
        setup: true,
    }
    await db(config).catch(handleFaltalError);
    console.log('Database is Connected!');
    process.exit(0);
}

function handleFaltalError(err) {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
}

setup();