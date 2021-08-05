const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.end("It is working!!!");
});

app.get("/api/list_books", (req, res) => {
  fs.readFile(__dirname + "/" + "bookset.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
