const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurants.sqlite');

try {
    db.serialize(function () {

        let stmt;

        try {
            stmt = db.prepare(`INSERT INTO restaurants (name, imagelink) 
                               VALUES (?, ?)`);
            stmt.run('McDonalds', 'mcdonalds_url');

            stmt = db.prepare(`INSERT INTO menus (title, restaurant_ID)
                               VALUES (?, ?)`);
            stmt.run('McDonalds menu (>11am)', 1);

            stmt = db.prepare(`INSERT INTO menus (title, restaurant_ID)
                               VALUES (?, ?)`);
            stmt.run('McDonalds menu (Breakfast)', 1);

            stmt = db.prepare(`INSERT INTO menuItems (name, price, menu_ID)
                               VALUES (?, ?, ?)`);
            stmt.run('Cheese burger', 2, 1);

            stmt = db.prepare(`INSERT INTO menuItems (name, price, menu_ID)
                               VALUES (?, ?, ?)`);
            stmt.run('Fries', 1, 1);

            stmt = db.prepare(`INSERT INTO menuItems (name, price, menu_ID)
                               VALUES (?, ?, ?)`);
            stmt.run('Sausage Muffin', 2, 2);

            stmt = db.prepare(`INSERT INTO menuItems (name, price, menu_ID)
                               VALUES (?, ?, ?)`);
            stmt.run('Hash brown', 1, 2);
        } finally {
            //release resources
            stmt.finalize();
        }

        //select the rows and print them out
        db.each(`SELECT menus.title, menuItems.name
                 FROM menus
                 JOIN menuItems
                 ON menuItems.menu_ID = menus.menu_ID
                 WHERE menus.menu_ID = 2`,
                    function (err,rows) {
                        console.log(rows);
                    }
        );
        db.close();
    });
} finally {
    //release resources
    db.close();
}