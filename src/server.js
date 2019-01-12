const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_PERSONS = "SELECT * FROM fridaogespenno01.rsvp";

const connection = mysql.createConnection({
  host: "fridaogespenno01.mysql.domeneshop.no",
  user: "fridaogespenno01",
  password: "Fagutval-merkevare-rompe-2litlemor",
  database: "fridaogespenno01",
  port: 3306
  //ssl: Using DHE-RSA-AES256-SHA
  //Server: mariadb.org binary distribution
});

connection.connect(err => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected!");
});

app.use(cors());

app.listen(3306, () => {
  console.log("Listening on port 3306");
});

app.get("/", (req, res) => {
  connection.query(SELECT_ALL_PERSONS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/add", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    other,
    music,
    fridayAttendance,
    fridayDinner,
    fridayEntertainment,
    saturdayAttendance
  } = req.query;
  const INSERT_PERSON = `INSERT INTO fridaogespenno01.rsvp (firstName, lastName, email, other, music, fridayAttendance, fridayDinner, fridayEntertainment, saturdayAttendance) VALUES ('${firstName}', '${lastName}', '${email}', '${other}', '${music}', ${fridayAttendance}, ${fridayDinner}, ${fridayEntertainment}, ${saturdayAttendance})`;
  connection.query(INSERT_PERSON, err => {
    if (err) {
      return res.send(err);
    } else {
      //What will happen when it is a success
      return res.send("Successfully added person");
    }
  });
});

// connection.end(err => {
//   if (err) {
//     console.error("Error ending connection: " + err.stack);
//     return;
//   }
//   console.log("Connection ended");
// });