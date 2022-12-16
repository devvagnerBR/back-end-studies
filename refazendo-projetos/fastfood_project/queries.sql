CREATE TABLE fast_food_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
);

CREATE TABLE fast_food_products (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            price INT NOT NULL,
            image_url VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE fast_food_purchases (
            id VARCHAR(255) PRIMARY KEY,
            quantity INT NOT NULL,
            total_price INT NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES fast_food_users(id),
            FOREIGN KEY (product_id) REFERENCES fast_food_products(id)
);
