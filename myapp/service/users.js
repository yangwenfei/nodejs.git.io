const People = require('../models').people
const debug = require('debug')('service:users')
const Sequelize = require('sequelize')
const Op = Sequelize.Op // Op是复杂sql语句的简化
let Service = {}
    //debug(Person)
Service.findById = id => {
    debug('id==========' + id)
        //debug(Person.findAll())
    People.findOne({
        row: true,
        where: {
            id: 21
        }
    }).then(result => {
        //http://docs.sequelizejs.com/manual/tutorial/instances.html#values-of-an-instance（对查询结果尽心处理）
        debug(result.get())
    })
}
Service.findAll = () => {
        return People.findAll({
            row: true
        }).then(result => {
            debug(result instanceof Array) //true
                //debug(result.map(i => i.get()))
            return result.map(i => i.get())
        })
    }
    /**
     * 返回值
     * count -总记录数
     * rows-一个对象数组
     */
Service.findAndCountAll = () => {
    //加上limit 与offset属性就可以实现分页查询了
    People.findAndCountAll({
        limit: 5,
        offset: 1 //数据库里的row的下标是从0开始的，offset=1，获取的查询结果是从第二行开始的，第二行的下标为1
    }).then(result => {
        debug('findandcount==========111')
        debug(result.count)
        debug(result.rows.map(i => i.get()))
    })
}

Service.findByOp = () => {
    debug('findByOp========')
    People.findAll({
            where: {
                id: {
                    [Op.or]: [
                        [1, 2, 3],
                        {
                            [Op.gt]: 10
                        }
                    ]
                }
            }
        }).then(result => {
            debug('findByOp========')
            debug(result.map(i => i.get()))
        })
        //Select *
        // FROM `People`
        // WHERE (`People`.`id` IN (1,2,3) OR `People`.`id` > 10)
}
Service.create = () => {
    // People.create({
    //     name: 'sdsds',
    //     password: 'ssss',
    //     email: '1111'
    // }).then(result => {
    //     debug('create============')
    //     debug(result)
    // })
}

Service.delete = () => {
    // People.findOne({ row: true, where: { id: 23 } })
    //     .then(result => {
    //         return result.destroy()
    //     })
    //     .then(res => {
    //         debug('destroy==========')
    //         debug(res.get())
    //     })
}

Service.update = () => {
    People.findOne({ row: true, where: { id: 24 } })
        .then(result => {
            return result.update({
                name: '杨文飞'
            })
        })
        .then(res => {
            debug('update==========')
            debug(res.get())
        })
}
module.exports = Service