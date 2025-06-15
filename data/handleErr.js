module.export= (err, req, res, next) =>{
    res.status(504).send("Uh-oh.. Timeout error, try again please.");
};