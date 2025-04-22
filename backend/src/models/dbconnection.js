const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_hOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        timezone: "-05:00"
    }
);

module.exports = sequelize;

