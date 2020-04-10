
DROP TABLE IF EXISTS houses;
CREATE TABLE houses
(
  id SERIAL PRIMARY KEY,
  name varchar(42),
  address VARCHAR(100),
  city VARCHAR(42),
  zipcode INTEGER(5)
);


