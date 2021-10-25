CREATE TABLE User (
    email varchar(100) NOT NULL,
    pass varchar(100) NOT NULL,
    PRIMARY KEY (email)
);

INSERT INTO User VALUES('nmanor@mtu.edu', 'password');