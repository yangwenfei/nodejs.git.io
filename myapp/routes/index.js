var express = require('express')
var router = express.Router()
var db = require('../models/index')
var debug = require('debug')('srv:route')

/* GET home page. */
router.get('/', function(req, res, next) {
    debug(111111111111)
    res.render('index', { title: 'Express' })
})

const users = require('./users')
router.use('/users', users)
const article = require('./article')
router.use('/article', article)
module.exports = router