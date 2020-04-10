INSERT INTO houses
(name, address, city, zipcode)
VALUES
($1, $2, $3, $4);

SELECT * FROM treasures
WHERE user_id = $2;