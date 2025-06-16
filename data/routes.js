const express= require("express");
const router= express.Router();


const taskValidation = require("./middleware/taskValidation.js")
const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);


router.get("/task",(req, res) =>{
    res.json(tasks);
});

router.post('/:task', taskValidation, (req, res) =>{
    const{subject, details, priority, group} = req.body;
    const newTask= {
        id: 1,
        subject,
        details,
        priority,
        group,
        finished: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.patch("/:id", (req, res) =>{
    const taskId= req.params.id;
    const task= tasks.find(t => t.id === taskId);
    if(!task) return res.status(404).send("No task found");
    task.finished= true;
    res.json(task);
});

router.delete("/:id", (req, res) =>{
   let  tasks= tasks.filter(t => t.id !== taskId);
    res.status(204).send();
});
