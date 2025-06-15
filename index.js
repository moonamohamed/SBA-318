const express = require("express");
const app = express();
const port = 3000;
const taskRoutes = require("./taskRoutes");
const handleErr = require("./middleware/handleErr");
const taskValidation = require("./middleware/taskValidation")


app.use("/tasks", taskRoutes);
app.use(express.json());
app.use(express.static("public"));
app.use(handleErr);



app.listen(port, () => {
  console.log("Server is running")
});
