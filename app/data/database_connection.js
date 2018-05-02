const CONFIG = require("../../knexfile")["development"];
module.exports = require("knex")(CONFIG);
