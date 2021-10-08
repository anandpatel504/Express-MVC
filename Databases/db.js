const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  useNullAsDefault: true,
});
knex.schema
  .createTable("Users", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email");
    table.string("password");
  })
  .then((data) => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log("Table Already Exist!!");
  });

module.exports = knex;
