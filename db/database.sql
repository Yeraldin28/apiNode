CREATE DATABASE IF NOT EXISTS companydb
USE compantdb
CREATE TABLE employee(
    id INT (11) NOT NULL AUTO,
    name VARCAHR(45) DEFAULT NULL, 
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)


-- para poner datos
DESCRIBE employee;