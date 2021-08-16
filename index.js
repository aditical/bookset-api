const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const fs = require("fs");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.end("It is working!!!");
});

app.get("/api/list_books", (req, res) => {
  fs.readFile(__dirname + "/" + "bookset.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
