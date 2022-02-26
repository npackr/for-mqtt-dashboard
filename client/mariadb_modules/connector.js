/*  MARIADB CONNECTOR TEST SCRIPT
    This script base on a resource from MariaDB offcial blog

    By          : npackr
    Resources   : https://mariadb.com/resources/blog/getting-started-with-connector-node-js/ */

// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');

// Create a connection pool
var pool = mariadb.createPool({
    host: 'https://db.npackr.com',
    port: 3306,
    user: 'npackrco_mqtt-dashboard',
    password: "o0?,6b/6CJZTM/H'",
    database: 'npackrco_qlsach'
});

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
});