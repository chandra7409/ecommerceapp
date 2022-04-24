/**
 * this file is representig product schema
 * product field
 * id
 * name
 * description
 * price
 */



module.exports = (sequelize, Sequelize) => {
    // const { Sequelize, sequelize } = require(".");


    const product = sequelize.define("product", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            tableName: 'product'
        }

    );
    return product;
}