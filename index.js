const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 5000;

// Connection URL
const url =
  "mongodb+srv://renaldisigit:2001@cluster0.ktj92.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
// Database Name
const dbName = "resume";

app.get("/", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("home");
  const dbWeb = await collection.find({}).toArray();

  res.status(200).json({ dbWeb });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
