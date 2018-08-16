// 运行当前测试文件的命令行: jest test/sum.test.js
// 如果要同时运行debug的话命令行是：cross-env DEBUG=service:* jest test/sum.test.js (注：cross-env需要全局安装)

process.env.NODE_ENV = 'development'
const People = require('../models').people
const debug = require('debug')('unit:article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

describe('基于 Sequelize 实现的 service层 测试用例', () => {
    afterAll(() => {
        debug('ending')
        require('../models').sequelize.close()
    })
    describe('service层测试用例', () => {
        test('findOne', () => {
            debug('ending11111111111')
            return People.findOne({
                where: {
                    id: 1
                }
            }).then(result => {
                //debug(result instanceof Array) //true
                debug(result)
                debug(1111111111111111111111)
                expect(result.get()).toEqual({ id: 1, name: 2, password: 1, email: 1 })
            })
        })
    })
})