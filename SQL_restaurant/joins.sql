INSERT INTO restaurants (name, imagelink)
VALUES ('McDonalds', 'mcdonalds_url'),
       ('Burger King', 'burgerking_url'),
       ('Kentucky Fried Chicken', 'KFC_url');

INSERT INTO menus (title, restaurant_ID)
VALUES ('Mcdonalds menu (>11am)', 1),
       ('Mcdonalds menu (breakfast)', 1),
       ('Burger King Menu', 2),
       ('Böörger Kang Menu', 2),
       ('KFC menu 1', 3),
       ('KFC menu 2', 3),
       ('KFC menu 3', 3);

INSERT INTO menuItems (name, price, menu_ID)
VALUES ('Cheese burger', 2, 1),
       ('Fries', 1, 1),
       ('Milkshake', 3, 1),

       ('Sausage Muffin', 2, 2),
       ('Hash brown', 1, 2),
       ('Coffee', 2, 2),

       ('Burger', 2, 3),
       ('BK Fries', 1, 3),

       ('Böörger Kang', 2, 4),
       ('Böörger Fries', 1, 4),

       ('Fried Chicken', 3, 5),
       ('Gravy', 1, 5),

       ('Coleslaw', 2, 6),
       
       ('Beans', 1, 7);

SELECT '------------------------';
-- Get 1 menu from 1 restaurant, list all items
SELECT menus.title, menuItems.name
FROM menus
JOIN menuItems
ON menuItems.menu_ID = menus.menu_ID
WHERE menus.menu_ID = 2;

SELECT '------------------------';
-- select all restaurants and the count of menus each restaurant has
SELECT restaurants.name, COUNT(menus.menu_ID) AS noOfMenus
FROM menus
JOIN restaurants
ON menus.restaurant_ID = restaurants.restaurant_ID
GROUP BY restaurants.name
ORDER BY noOfMenus DESC;

SELECT '------------------------';
-- select all menus, and total cost of all menu items summed.
--      List in descending order.
SELECT menus.title, SUM(menuItems.price) AS menuTotalPrice
FROM menuItems
JOIN menus
ON menuItems.menu_ID = menus.menu_ID
GROUP BY menus.title
ORDER BY menuTotalPrice DESC;