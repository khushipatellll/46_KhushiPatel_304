const express = require('express')
const app = express()
app.use(express.static('public'));

app.get('/gethello',(req,res) => {
    res.send('Hello Node.Js!...')
});

app.listen(8000)