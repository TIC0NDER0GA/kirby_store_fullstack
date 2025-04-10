CREATE TABLE Products ( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    stars INT,
    description VARCHAR(150) default NULL
);


CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(150),
    lastName VARCHAR(150),
    username VARCHAR(255),
    password VARCHAR(255)
);


CREATE TABLE Orders (
     id SERIAL PRIMARY KEY,
     user_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
     status VARCHAR(50)
 );


 CREATE TABLE Order_Products (
     id SERIAL PRIMARY KEY,
     order_id INT NOT NULL REFERENCES Orders(id) ON DELETE CASCADE,
     user_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
     product_id INT NOT NULL REFERENCES Products(id) ON DELETE CASCADE,
     quantity INT NOT NULL CHECK (quantity > 0)
 );




INSERT INTO Products (name, stars, description) VALUES
('Maxim Tomato', 10, 'A healing food that restores health.'),
('Invincibility Candy', 5, 'A sweet treat that grants temporary invincibility.'),
('Energy Drink', 4, 'A drink that boosts energy, restoring stamina.'),
('Pep Brew', 7, 'A spicy brew that boosts speed and energy.'),
('Star Rod', 30, 'A powerful rod that shoots stars to defeat enemies.'),
('Hypernova Fruit', 20, 'A rare fruit that grants incredible powers.'),
('Warp Star', 50, 'A star-shaped vehicle that transports to new places.'),
('Beam Ability', 15, 'A power-up that allows shooting energy beams.'),
('Fire Ability', 12, 'A fiery power that launches fireballs and creates flames.');