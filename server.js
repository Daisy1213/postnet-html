/**
 * Created by zhangsha on 16-8-2.
 */


const transformOne = require('./src/transformToBarcode');
const transformTwo = require('./src/transformToPostCode');

let toBarcode = new transformOne();
let toPostcode = new transformTwo();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static('public'));
app.use(cors());

app.post('/postcodetobarcode', (req, res) => {
    console.log('============')
    res.send(toBarcode.transformToBarcode(req.body.code));
});

app.post('/barcodetopostcode', (req, res) => {
    res.send(toPostcode.transformToPostCode(req.body.code));
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});


module.exports = app;