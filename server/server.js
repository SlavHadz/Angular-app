const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from server'
    })
})

app.listen(PORT, () => {
    console.log('Server is running on localhost:' + PORT);
});