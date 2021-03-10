const express = require('express');
const cors = require('cors'); 
const helmet = require('helmet'); 
const morgan = require('morgan');
const rateLimit = require('express-rate-limit'); 

const appRouter = require('./routes'); 
const errorHandler = require('./middlewares/errorHandler');

const setupApp = (app) =>{
    app.use(
        rateLimit({
            windowMs: 60 * 60 * 100, 
            max: 100
        })
    );

    app.use(cors());
    app.use(helmet());
    app.use(morgan('combined'));

    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));

    app.use(appRouter);
    app.use(errorHandler);

    return app; 
}

module.exports = setupApp;