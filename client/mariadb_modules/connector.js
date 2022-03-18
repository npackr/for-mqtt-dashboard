const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'npackr.com', 
     user:'npackrco_mqtt-dashboard', 
     password: "o0?,6b/6CJZTM/H'",
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * from login");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO login value (user, login, password)", ["user1", "USER1", "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}