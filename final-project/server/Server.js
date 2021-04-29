const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const cors = require('cors');

const url =
  "mongodb+srv://Katie:GimhB123@users.kidr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.listen(8081, function () {
  console.log("listening on 8081");
});

app.use(cors());

app.get("/", function (req, res) {
  res.send("hello");
});

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

app.get("/users", function (req, res) {
  const client = new MongoClient(url, { useNewUrlParser: true });
  const dbName = "Users";
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to login server");

    const db = client.db(dbName);
    db.collection("Users")
      .find().toArray()
      .then((results) => {
        res.send(results);
      }).catch((err) => {console.log(err)});
    client.close();
  });
});

