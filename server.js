/**
 * Created by zhangsha on 16-8-2.
 */


const transformOne = require('./src/transformToBarcode');
const transformTwo = require('./src/transformToPostCode');

let toBarcode = new transformOne();
let toPostcode = new transformTwo();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static('view'));
// app.use('aaa', express.static('view'));  两个参数时，第一个参数为了屏蔽URI的真实路径

app.get('/toPostcode', (req, res) => {
    console.log(req.query.input)
    res.send(toPostcode.transformToPostCode(req.query.input));
});

app.get('/toBarcode', (req, res) => {
    console.log(req.query.input)
    res.send(toBarcode.transformToBarcode(req.query.input));
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});


module.exports = app;