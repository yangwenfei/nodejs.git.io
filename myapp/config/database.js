module.exports = {
    development: {
        database: 'test', // 使用哪个数据库
        username: 'root', // 用户名
        password: 'BeShoiU!@', // 口令
        dialect: 'mysql',
        option: {
            operatorsAliases: false,
            host: 'localhost', // 主机名
            port: 3306, // 端口号，MySQL默认3306
            logging: false,
            dialect: 'mysql',
            define: {
                underscored: true,
                freezeTableName: false,
                charset: 'utf8',
                dialectOptions: {
                    collate: 'utf8_general_ci'
                },
                timestamps: false
            },
            pool: {
                max: 50,
                min: 0,
                idle: 3000
            }
        }
    }
    // qa: {
    //     database: 'website', // 使用哪个数据库
    //     username: 'root', // 用户名
    //     password: 'Feiliu2haolou', // 口令
    //     option: {
    //         operatorsAliases: false,
    //         host: '127.0.0.1', // 主机名
    //         port: 3306, // 端口号，MySQL默认3306
    //         logging: false,
    //         dialect: 'mysql',
    //         define: {
    //             underscored: true,
    //             freezeTableName: false,
    //             charset: 'utf8',
    //             dialectOptions: {
    //                 collate: 'utf8_general_ci'
    //             },
    //             timestamps: false
    //         },
    //         pool: {
    //             max: 5,
    //             min: 0,
    //             idle: 3000
    //         }
    //     }
    // },
    // production: {
    //     database: 'website', // 使用哪个数据库
    //     username: 'root', // 用户名
    //     password: 'Feiliu2haolou', // 口令
    //     option: {
    //         operatorsAliases: false,
    //         host: '10.66.187.39', // 主机名
    //         port: 3306, // 端口号，MySQL默认3306
    //         logging: false,
    //         dialect: 'mysql',
    //         define: {
    //             underscored: true,
    //             freezeTableName: false,
    //             charset: 'utf8',
    //             dialectOptions: {
    //                 collate: 'utf8_general_ci'
    //             },
    //             timestamps: false
    //         },
    //         pool: {
    //             max: 5,
    //             min: 0,
    //             idle: 3000
    //         }
    //     }
    // }
}