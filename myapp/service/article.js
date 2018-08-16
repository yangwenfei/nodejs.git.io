const Article = require('../models').article
const debug = require('debug')('service:article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Service = {}
Service.findAll = () => {
    return Article.findAll({
        row: true
    }).then(result => {
        debug(result.map(i => i.get()))
        return result.map(i => i.get())
    })
}

module.exports = Service