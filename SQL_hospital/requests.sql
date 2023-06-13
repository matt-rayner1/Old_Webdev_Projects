-- create
INSERT INTO hospitals (hospital_name, address, city, county, postcode, contactNo)
VALUES ('Birmingham Childrens Hospital', 'Steelhouse Lane', 'Birmingham', 'West Midlands', 'B4 6NH', 999);

-- read one
SELECT *
FROM hospitals;

-- update
UPDATE hospitals SET contactNo=01214548888 WHERE hospital_name='Birmingham Childrens Hospital';

-- read two
SELECT *
FROM hospitals;

-- delete
DELETE FROM hospitals WHERE city='Birmingham';
DROP TABLE hospitals;
DROP DATABASE main;

-- read all