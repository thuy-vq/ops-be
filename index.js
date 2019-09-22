const express = require('express');
const app = express();

var cors = require('cors');

app.get('/', cors() , (req, res) => {
    res.status(200).send("get ///// successfully");
    // res.sendFile(path.resolve(__dirname, '../..', 'client', 'build', 'index.html'));
});
app.get('/thuyvq', cors() , (req, res) => {
    res.status(200).send("kakike test thuyvq");
});
app.post('/thuyvq', cors() , async (req, res) => {
    res.status(200).send({
        logged: true,
        user: 'thuyvq'
    });
});

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
