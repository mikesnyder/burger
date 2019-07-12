CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,

  	PRIMARY KEY(id)
);

CREATE TABLE toppings
(
	id int NOT NULL AUTO_INCREMENT,
	extra_patty BOOLEAN DEFAULT false,
	bacon BOOLEAN DEFAULT false,
	fried_egg BOOLEAN DEFAULT false,
	mac_n_cheese BOOLEAN DEFAULT false,
	avocado BOOLEAN DEFAULT false,
	cheese BOOLEAN DEFAULT false,
	tomato BOOLEAN DEFAULT false,
	lettuce BOOLEAN DEFAULT false,
	onion BOOLEAN DEFAULT false,
	jalapenos BOOLEAN DEFAULT false,
	pineapple BOOLEAN DEFAULT false,
	peppers BOOLEAN DEFAULT false,
	pickles BOOLEAN DEFAULT false,
	mushrooms BOOLEAN DEFAULT false,
	peanut_butter BOOLEAN DEFAULT false,
	ketchup BOOLEAN DEFAULT false,
	mustard BOOLEAN DEFAULT false,
	hot_sauce BOOLEAN DEFAULT false,
	ranch BOOLEAN DEFAULT false,
	bbq_sauce BOOLEAN DEFAULT false,
	mayo BOOLEAN DEFAULT false,

	PRIMARY KEY(id)
);