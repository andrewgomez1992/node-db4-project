const express = require('express');
const router = require('./data/recipes/router');

const server = express();

server.use(express.json());
server.use('/api/recipes', router);

server.use("*", (req, res) => {
    res.json({ api: 'up' })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
