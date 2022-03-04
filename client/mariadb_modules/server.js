/*  MARIADB SERVER TEST SCRIPT
    This script base on a resource from MariaDB offcial blog

    By          : npackr
    Resources   : https://mariadb.com/resources/blog/getting-started-with-connector-node-js/
*/

const express = require('express')
const db = require('./connector')
const app = express()
const port = 8080
const bodyParser = require("body-parser");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// GET
app.get('/user', async (req, res) => {
    try {
        const result = await db.pool.query("select * from user");
        res.send(result);
        console.log("Connect successfully!")
    } catch (err) {
        throw err;
    }
});
 
// POST
app.post('/tasks', async (req, res) => {
    let task = req.body;
    try {
        const result = await db.pool.query("INSERT INTO `login` (`id`, `user`, `login`, `password`) VALUES (NULL, 'user2', 'user', 'o0?,6b/6CJZTM/H\'');");
        res.send(result);
    } catch (err) {
        throw err;
    }
});
 
app.put('/tasks', async (req, res) => {
    let task = req.body;
    try {
        const result = await db.pool.query("update tasks set description = ?, completed = ? where id = ?", [task.description, task.completed, task.id]);
        res.send(result);
    } catch (err) {
        throw err;
    } 
});
 
app.delete('/tasks', async (req, res) => {
    let id = req.query.id;
    try {
        const result = await db.pool.query("delete from tasks where id = ?", [id]);
        res.send(result);
    } catch (err) {
        throw err;
    } 
});
 
app.listen(port, () => console.log(`Listening on port ${port}`));