const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://Katie:GimhB123@users.kidr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Database Name
const dbName = 'Users';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findUser(db, function() {
    client.close();
  });

  client.close();
});

const findUser = function(db, callback) {
        // Get the documents collection
        const quizcollection = db.collection('Users');
        // Find some documents
        quizcollection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following users");
          console.log(docs)
          callback(docs);
        });
    }
 