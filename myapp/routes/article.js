const express = require('express')
const router = express.Router()
const debug = require('debug')('route:article')
const article = require('../service/article')

/**
 *  获取所有信息列表
 *  uri = /article/latest/all
 */
router.get('/all', function(req, res) {
    article.findAll().then(result => {
        console.log(result)
        res.send(result)
    })
})

module.exports = router