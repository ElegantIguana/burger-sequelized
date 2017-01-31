// Import packages.
var Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize('burgers_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var Burger = sequelize.define('burgers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    burger_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
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

Burger.sync();

module.exports = Burger;