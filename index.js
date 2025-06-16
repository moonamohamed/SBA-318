import express from "express"
import { tasks } from "./task.js";
import {v4 as uuidv4 } from "uuid"
const router = express.Router();

const app = express();
const port = 3000;


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
res.send('RemindMe Please!');
});

app.get("/tasks", (req, res) => {
     res.render('view', { tasks });
});

app.get("/api/tasks",(req, res) =>{
    res.json(tasks);
});

const taskValidation= (req, res, next) => {
  const {subject, details}= req.body
  if (!subject || !details) {
    return res.status(400).json({error: "Required: subject and details"});
  }
  next();
};

app.post('/api/tasks', taskValidation, (req, res) =>{
    const{subject, details, priority, group} = req.body;
    if (!subject || !details){
      return res.status(400).json({ error: "Required: subject and details"});
    }
    const newTask= {
        id: uuidv4(),
        subject,
        details,
        priority: priority || "low",
        group: group || "General",
        finished: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.patch("/api/tasks/:id", (req, res) =>{
    const taskId= req.params.id;
    const task= tasks.find((t) => t.id === taskId);
    if(!task) return res.status(404).json("No task found");
    
    task.finished= req.body.finished ?? true;
    res.json(task);
});

app.delete("/api/tasks/:id", (req, res) =>{
  const taskId= req.params.id;
  const taskIndex= tasks.findIndex((t) => t.id === taskId);
    if(taskIndex === -1) 
      {return res.status(404).json({ error: "No task found"});
  }
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});


app.listen(port, () => {
  console.log(`Server is running ${port}`)
});

