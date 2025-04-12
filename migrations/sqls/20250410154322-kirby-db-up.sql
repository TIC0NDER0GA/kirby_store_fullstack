CREATE TABLE Products ( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    path text,
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



INSERT INTO Users (firstName, lastName, username, password) VALUES 
('Pink', 'Amethyst', 'kirby_pink', '$2b$10$NrX4X0j.Pn9KFNYyBRMhU.lVwF.xQnhwpv0XwEFcg4bXMDJE2n3om'),
('Blue', 'Vermilion', 'kirby_blue', '$2b$10$8aLCQb5Ym.8RWoEJxkKw8.RH4qnPLt2K0iWVwSQiW0Cj.lKQxu97O'),
('Green', 'Amber', 'kirby_green', '$2b$10$Z52vECWlCM5DYX5dCdcTjOFiYZ6oXDYTQVmIz0MJsaYKYPACvTXhq'),
('Yellow', 'Indigo', 'kirby_yellow', '$2b$10$OUWRfzTMV5uy5pz3rBKQJenE9CIXpbMsxq/2qUOBBUvZRHKqbsZmy'),
('Red', 'Teal', 'kirby_red', '$2b$10$aZLJbDPwwNTUXgdE5v2jz.5iyDFB1Dxm4OdYrRjaBr/5hM9CwOjqO');


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

INSERT INTO Orders (user_id, status) VALUES 
(1, 'active'),   -- Pink Kirby's Order
(2, 'complete'), -- Blue Kirby's Order
(3, 'active');   -- Green Kirby's Order


INSERT INTO Order_Products (order_id, user_id, product_id, quantity) VALUES
(1, 1, 1, 1),  -- Pink Kirby -> Maxim Tomato
(1, 1, 2, 1),  -- Pink Kirby -> Invincibility Candy
(1, 1, 4, 1),  -- Pink Kirby -> Pep Brew

(2, 2, 3, 2),  -- Blue Kirby -> Energy Drink x2
(2, 2, 5, 1),  -- Blue Kirby -> Star Rod

(3, 3, 6, 1),  -- Green Kirby -> Hypernova Fruit
(3, 3, 7, 1);  -- Green Kirby -> Warp Star