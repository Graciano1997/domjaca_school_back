require("dotenv").config();

const dbConfiguration = {
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
};

module.exports = { dbConfiguration };