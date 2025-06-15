module.exports= (err, req, res, next) =>{
    console.error(err);
    res.status(504).send("Uh-oh.. Timeout error, try again please.");
};