import Express from "express";
import mysql from "mysql2";
import getDBConnection from "../db/db";
import ILoginResponse from "../models/ILoginResponse";

const loginGetRoutes = Express.Router();




// Get a list of all users
loginGetRoutes.get("/calories", (req, res) => {
  var connection: mysql.Connection = getDBConnection();
  connection.query('SELECT * FROM User', (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: ILoginResponse = { users: [] };
    rows.forEach((element: string) => { resp.users.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });

  connection.end();
});

//Post info to db from the server\
//This is what I added to post info to the database. 
loginGetRoutes.post('/calories',(req, res) =>{
  var connection: mysql.Connection = getDBConnection();
  const email = req.body.email
  const password = req.body.password
  const fname = req.body.fname
  const lname = req.body.lname
 
  connection.query(
    "INSERT INTO User(email, pass, fname, lname) VALUES (?,?,?,?)",
    [email, password, fname, lname],
    (err,result) =>{console.log(err);
    });
    connection.end();
});

// Get a specific recipe
// TODO: Get more details for a recipe (steps, pictures, etc.)
loginGetRoutes.get("/calories/:email", (req, res) => {
  var connection: mysql.Connection = getDBConnection();
  connection.query(`SELECT * FROM User WHERE email = ${req.params.email}`, (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: ILoginResponse = { users: [] };
    rows.forEach((element: string) => { resp.users.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });

  connection.end();
});

export default loginGetRoutes;