const knex = require("knex");

const knexfile = require("../knexfile.js");
const environment = process.env.NODE_ENV || "testing" || "development";

module.exports = knex(knexfile[environment]);
