const {sequelize} = require('./sequelize_index');
const {Restaurant, Menu, MenuItems} = require('./models');

describe('Restaurant', () => {
    beforeAll(async () => {
        await sequelize.sync( {force: true});
    });

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create( {name: 'Ronalds', image: 'http://some.image.url' });
        expect(restaurant.id).toBe(1);
    });
    test('restaurant name is Ronalds', async () => {
        const restaurant = await Restaurant.create( {name: 'Ronalds', image: 'http://some.image.url' });
        expect(restaurant.name).toBe('Ronalds');
    })
});

describe('Menu', () => {
    beforeAll(async () => {
        await sequelize.sync( {force: true});
    });

    test('can create a menu', async () => {
        const menu = await Menu.create( {title: 'breakfast'});
        expect(menu.id).toBe(1);
    });
    test('menu name is breakfast', async () => {
        const menu = await Menu.create( {title: 'breakfast'});
        expect(menu.title).toBe('breakfast');
    })
});

describe('MenuItems', () => {
    beforeAll(async () => {
        await sequelize.sync( {force: true});
    });

    test('can create a menuitem', async () => {
        const menuItem = await MenuItems.create( {name: 'muffin', price: 2.5})
        expect(menuItem.id).toBe(1);
    })
    test('menuItem price is 2.5', async () => {
        const menuItem = await MenuItems.create( {name: 'muffin', price: 2.5})
        expect(menuItem.price).toBe(2.5);
    })
})