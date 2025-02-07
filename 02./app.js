const express = require('express');

const app = express();



app.get("/", (req, res) =>{
    res.send({ data: "This is the root route"});
});

app.get("/blablabla", (req, res) =>{
    res.send({ data: "This is the blablabla route"});
});


app.listen(8080);


// Instead of using "{}"" to get/set path variables, js uses ":"
app.get("/favoritenumber/:favoritenumber", (req, res) =>{
    console.log(req)
    res.send({data: `Your favorite number is: ${req.params.favoritenumber}`});
})

