//const { SET_DEFERRED } = require("sequelize/types/deferrable")

module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            authoIncrement: true
        },
        cost: {
            type: Sequelize.INTEGER
        }

    }, {
        tableName: "carts"
    });
    return Cart;
}