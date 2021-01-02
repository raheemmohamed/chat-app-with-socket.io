var mysql = require("mysql");
var dbconnection = {};

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zimo",
});

const dbConnectionMsg = {
  success: "Database is Connected",
  failed: "Database is failed",
};

dbconnection.check_db_connection = function () {
  connection.connect(function (err) {
    if (err) throw err;
    console.log(dbConnectionMsg.success);
  });
};
//Dummie tbl creation
dbconnection.createTestTable = function () {
  const sql =
    "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
};
dbconnection.connection = connection;

module.exports = dbconnection;
