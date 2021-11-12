CREATE TABLE User (
    email varchar(100) NOT NULL,
    pass varchar(100) NOT NULL,
    fname varchar(100) NOT NULL,
    lname varchar(100) NOT NULL,
    PRIMARY KEY (email)
);

CREATE TABLE Goal (
    email varchar(100) NOT NULL,
    curWeight int NOT NULL,
    goalWeight int NOT NULL,
    calGoal int NOT NULL,
    PRIMARY KEY (email)
);

CREATE TABLE Meal (
    email varchar(100) NOT NULL,
    food varchar(100) NOT NULL,
    calories int NOT NULL,
    PRIMARY KEY (email, food)
);