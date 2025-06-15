const express= require("express");
const router= express.Router();
const {uuidv4} = require("./data")


const taskValidation= require("../midleware.taskValidation");

router.get("/tasks",(req, res) =>{
    res.json(tasks);
});

router.post('/:subject', taskValidation, (req, res) =>{
    const{subject, details, priority, group} = req.body;
    const newTask= {
        id: uuidv4(),
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
    tasks= tasks.filter(t => t.id !== taskId);
    res.status(204).send();
});

module.export= router;
module.export= function(req, res, next) {
    if(!subject || !details || !priority || !group){
        return res.status(400).send("All fields are required!")
    }
    next()
}