const express = require('express')
const router = express.Router()
const debug = require('debug')('route:users')
const users = require('../service/users')

/**
 *  获取所有信息列表
 *  uri = /users/all
 */
router.get('/all', function(req, res) {
    // person.findById(21)
    // person.findAll()
    // person.findAndCountAll()
    // person.findByOp()
    // person.create()
    // person.delete()
    // person.update()
    users.findAll().then(result => {
        // debug(result)
        res.send(result)
    })
})

module.exports = router