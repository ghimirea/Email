const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Render" });
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
