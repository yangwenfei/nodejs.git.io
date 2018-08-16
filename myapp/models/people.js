module.exports = (sequelize, DataTypes) => {
    //user在数据库里是关键字所以就把用户表的名设成了people
    return sequelize.define('people', {
        id: {
            type: DataTypes.INTEGER(6),
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            field: 'name'
        },
        password: {
            type: DataTypes.STRING(255),
            field: 'password'
        },
        email: {
            type: DataTypes.STRING(255),
            field: 'email'
        }
    })
}