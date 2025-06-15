const express = require("express");
const app = express();
const port = 3000;
const taskRoutes = require("./taskRoutes");
const handleError = require("./middleware/handleErr");
const taskValidation = require("./middleware/taskValidation")


app.use("/tasks", taskRoutes);
app.use(handleErr);

app.use(express.json());
app.use(express.static("public"));


app.get("/:reminder", (req, res) => {
  res.send("Wake Up");
});
app.listen(port, () => {
  console.log("Server is running")
});