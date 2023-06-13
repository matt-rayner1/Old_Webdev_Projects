const {sequelize, DataTypes, Model} = require('./sequelize_index');

class Restaurant extends Model {
    //methods
}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

class Menu extends Model {
    //methods
}
Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false, 
});

class MenuItems extends Model {
    //methods
}
MenuItems.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Restaurant, Menu, MenuItems};