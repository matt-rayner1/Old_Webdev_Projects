--insert tables
INSERT INTO restaurants (name, imagelink)
VALUES ('McDonalds', 'mcdonalds_url'),
       ('Burger King', 'burgerking_url'),
       ('Kentucky Fried Chicken', 'KFC_url');


INSERT INTO menus (title)
VALUES ('Mcdonalds menu'),
       ('Burger King Menu'),
       ('KFC menu');

INSERT INTO menuItems (name, price)
VALUES ('Cheese burger', 2),
       ('Fries', 1),
       ('Milkshake', 3),
       ('Fried Chicken', 3);

--read tables
SELECT * FROM restaurants;
SELECT * FROM menus;
SELECT * FROM menuItems;

SELECT name FROM restaurants;
SELECT title FROM menus;
SELECT * FROM menuItems WHERE price >= 2;

--pragma
PRAGMA table_info(restaurants)

--update tables
UPDATE restaurants SET imagelink='Kentucky_url' WHERE imagelink='KFC_url';

--delete rows
DELETE FROM menuItems WHERE name='Milkshake'