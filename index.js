const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;



// app.get("./", (req, res) => {
//      res.send('RemindMe Please!');
//    });

app.set('view engine', 'ejs');

app.get("./", (req, res) => {
     res.render('view', {task});
});

app.listen(port, () => {
  console.log("Server is running")
});

