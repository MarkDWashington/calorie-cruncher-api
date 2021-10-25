import Express from "express";
import mysql from "mysql2";
import getDBConnection from "../db/db";
import ILoginResponse from "../models/ILoginResponse";

const recipeGetRoutes = Express.Router();

// Get a list of all users
recipeGetRoutes.get("/calories", (req, res) => {
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

// Get a specific recipe
// TODO: Get more details for a recipe (steps, pictures, etc.)
recipeGetRoutes.get("/calories/:email", (req, res) => {
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