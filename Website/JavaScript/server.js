const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = 2121;

app.listen(PORT, () => {
    console.log('App listening to port 2121');
});

app.get('/M00864474', (req, res) => {
    res.send("hello M00864474");
});


//import logger from pino
const pino = require('pino');

//create a logger instance
const logger = pino();

//use the logger
logger.info('hello world - logged with pino');
