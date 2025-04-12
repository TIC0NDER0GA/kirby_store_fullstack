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


INSERT INTO Products (name, path, stars, description) VALUES
('Maxim Tomato', 'assets/images/MaximTomato.png', 10, 'A healing item that fully restores health.'),
('Invincibility Candy', 'assets/images/Candy.png', 5, 'Grants temporary invincibility.'),
('Energy Drink', 'assets/images/EnergyDrink.png', 4, 'Partially restores health.'),
('Battery', 'assets/images/battery.png', 7, 'A power source used to activate machines and unlock areas.'),
('Beam Ability', 'assets/images/beam.png', 15, 'Enables long-range energy attacks.'),
('Fire Ability', 'assets/images/fire.png', 12, 'Unleashes flames and fireballs.'),
('Smash Ability', 'assets/images/SSBB.png', 25, 'Combines multiple powerful techniques into one form.'),
('Master Ability', 'assets/images/master.png', 30, 'A legendary ability that combines swordsmanship with energy waves.'),
('Laser Ability', 'assets/images/laser.png', 14, 'Fires beams that bounce off surfaces.'),
('Shock Ability', 'assets/images/shock.png', 13, 'Electrifies enemies with a burst of energy.');

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