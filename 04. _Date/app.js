const express = require('express');

const app = express();

const port = 8080;

app.get('/months', (req, res) => {
    let currentMonth = new Date();
    currentMonth = currentMonth.getMonth;
    res.send(currentMonth);
});

app.get('/', (req, res) => {
    
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});