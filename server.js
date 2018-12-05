const express = require('express');
const compression = require('compression')
const path = require('path');
const bodyParser = require('body-parser');
// const db = require('./modules/db/db');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist/bip'));
app.use(compression())

app.route('/api/sender')
    .post((req,res) => {
        res.end();
    });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/bip/index.html'));
});

app.listen(process.env.PORT || 8080);