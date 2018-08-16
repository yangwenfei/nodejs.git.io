/**
 * 表结构对应: website_article.sql
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'article', {
            id: {
                type: DataTypes.INTEGER(6),
                field: 'id',
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING(255),
                field: 'title'
            },
            content: {
                type: DataTypes.STRING(255),
                field: 'content'
            }
        }, {
            //不添加创建、更新时间戳
            timestamps: false,
            //使用下划线命名法
            underscored: true,
            //不自动修改表名
            freezeTableName: true,
            // define the table's name
            tableName: 'article'
        }
    )
}