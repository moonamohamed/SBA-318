const express = require("express");
const app = express();
const port = 3000;




app.get("/:reminder", (req, res) => {
  res.send("Wake Up");
});
app.listen(port, () => {
  console.log("Server is running")
});