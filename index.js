const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression())

const cors = require('cors');
const path = require('path');

app.get('/test', cors() , (req, res) => {
    res.status(200).send("get /test successfully");
})

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', cors() , (req, res) => {
    // res.status(200).send("get ///// successfully");
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
