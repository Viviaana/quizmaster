const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const cors = require('cors');

const url = require("./config/keys").mongoURI;


app.listen(8081, function () {
  console.log("listening on 8081");
});

app.use(cors());

app.get("/", function (req, res) {
  res.send("hello");
});

//Pulling the quizzes from the database, title and image only, no questions
app.get("/quizzes", function (req, res) {
  const client = new MongoClient(url, { useNewUrlParser: true });
  const dbName = "Quizzes";
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to quiz server");

    const db = client.db(dbName);
    db.collection("Quizzes")
      .find().toArray()
      .then((results) => {
        res.send(results);
      }).catch((err) => {console.log(err)});
    client.close();
  });
});

//Pulling the questions and answers from the database using the quiz ID
app.get("/questions", function (req, res) {
  const client = new MongoClient(url, { useNewUrlParser: true });
  const id = req.query.id;
  console.log(id);
  const dbName = "Quizzes";
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to question server");

    const db = client.db(dbName);
    var questions = db.collection("Questions");
    questions
      .find({ quizID: id })
      .toArray()
      .then((results) => {
        console.log(results);
        res.send(results);
      });
    client.close();
  });
});

//Pulling the users from the database
app.get("/users", function (req, res) {
  const email = req.query.email;
  const client = new MongoClient(url, { useNewUrlParser: true });
  const dbName = "Users";
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to user server");

    const db = client.db(dbName);
    db.collection("Users")
      .find({email : email}).toArray()
      .then((results) => {
        res.send(results);
      }).catch((err) => {console.log(err)});
    client.close();
  });
});

