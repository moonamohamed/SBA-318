function errorHandler (err, req, res, next) {
    console.log(err)
    res.status(504).send("Uh-oh.. Timeout error, try again please.");
};
module.export= errorHandler;