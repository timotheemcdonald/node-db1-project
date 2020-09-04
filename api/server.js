const express = require("express");
const { json } = require('express')

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/api/accounts", (req,res) => {
    
    .then(value => {

    })
    .catch(error => {
        res.status(500).json({ error: "Accounts couldn't be retrieved."})
    })
})

module.exports = server;
