const express = require('express')
const router = express.Router()

router.use(express.json())

const db = require('../data/dbConfig')

router.get("/", (req, res) => {
   
    // db("accounts")
     db.select('*').from('accounts')
    .then(accounts => {
        res.status(200).json({ data: accounts })
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting the Account."})
    })
})

router.post("/", (req, res) => {
    const changes = req.body
    db("accounts").insert(changes)
    .returning("id")
    .then(ids => {
        res.status(201).json({ inserted: ids })
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving the Account data."})
    })
})

router.put("/:id", (req, res) => {
    const accountId = req.params.id
    const changes = req.body
    db("accounts")
    .where({id: accountId})
    .update(changes)
    .then(count => {
        if(count){
        res.status(200).json({message: "Account updated successfully."})}
        else{
            res.status(404).json({message: "Account could not be found."})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error updating the account."})
    })
})

router.delete("/:id", (req, res) => {
    const accountId = req.params.id
    db("accounts")
    .where("id", "=", accountId)
    .del()
    .then(count => {
        if(count){
        res.status(200).json({message: "Account removed successfully."})}
        else{
            res.status(404).json({message: "Account could not be found."})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error deleting the account."})
    })
})


module.exports = router