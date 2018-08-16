const path = require('path')
const fs = require('fs')
const basename = path.basename(__filename)
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/database')[env]
const debug = require('debug')('srv:model')

//debug(config)
console.log(env)
    //在实例化的时候应该根据不同的环境设置不同参数，这个地方后续需要补充修改
const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.option
    )
    // const sequelize = new Sequelize('test', 'root', 'BeShoiU!@', {
    //     dialect: 'mysql'
    // })
const db = {}
    //创建数据模型，除去index.js,models下的一个文件对应一个数据表就是一个Model
fs.readdirSync(__dirname)
    .filter(file => {
        return file !== basename
    })
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file))
        debug('import model[%s] from file[%s]', model.name, file)
        db[model.name] = model
    })
db.sequelize = sequelize
db.Sequelize = Sequelize
    //debug(db)
    //  returns
    //  db={
    // user:user
    // sequelize:Sequlize实例
    // }

module.exports = db

//index.js文件最终是要导出 通过Sequelize创建的数据库表所对应的模型model
// website 数据库里面的表 person表 -> person模型;website_article表 -> website_article 模型,......