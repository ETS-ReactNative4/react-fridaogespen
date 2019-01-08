const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_PERSONS = "SELECT * FROM rsvp";

const connection = mysql.createConnection({
  host: "fridaogespen01.mysql.domeneshop.no",
  user: "fridaogespenno01",
  password: "Fagutval-merkevare-rompe-2litlemor",
  database: "fridaogespenno01"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /person to see data");
});

app.get("/person", (req, res) => {
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

app.get("/person/add", (req, res) => {
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
  const INSERT_PERSON = `INSERT INTO rsvp (firstName, lastName, email, other, music, fridayAttendance, fridayDinner, fridayEntertainment, saturdayAttendance) VALUES ('${firstName}', '${lastName}', '${email}', '${other}', '${music}', ${fridayAttendance}, ${fridayDinner}, ${fridayEntertainment}, ${saturdayAttendance})`;
  connection.query(INSERT_PERSON, err => {
    if (err) {
      return res.send(err);
    } else {
      //What will happen when it is a success
      return res.send("successfully added person");
    }
  });
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
