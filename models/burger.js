var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('burgers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        burger_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    });
//
// Burger.bulkCreate([
//     {burger_name: 'Hamburger'},
//     {burger_name: 'Cheeseburger'},
//     {burger_name: 'Veggie Burger'}
// ],
//     {
//         updateOnDuplicate
//     });

    return Burger;
};

