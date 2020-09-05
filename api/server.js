const express = require("express");
const { json } = require('express')

const db = require("../data/dbConfig.js");
const accountsRouter = require('../api/accountsRouter')

const server = express();

server.use(express.json());

server.use("/api/accounts", accountsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Accounts API</h2>`)
})

module.exports = server;
