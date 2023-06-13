const {sequelize} = require('./sequelize_index');
const {Restaurant, Menu, MenuItem} = require('./models');

describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync( {force: true} );
    })

    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create( {name: 'Ronalds', image: 'https://some.image.url'} )
        const menu = await Menu.create({title: 'breakfast'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].title).toBe('breakfast');
    })

    test('menus have menuItems', async () => {
        const menu = await Menu.create({title: 'breakfast'});
        const menuItem = await MenuItem.create({name: 'sassage', price: 1.5});
        await menu.addMenuItem(menuItem);
        const menuItems = await menu.getMenuItems();
        expect(menuItems[0].name).toBe('sassage');
        expect(menuItems[0].price).toBe(1.5);
    })
})