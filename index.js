const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");
const cors = require("cors");

app.get("/", (req, res) => {
  res.end("It is working!!!");
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/api/list_books", (req, res) => {
  fs.readFile(__dirname + "/" + "bookset.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
