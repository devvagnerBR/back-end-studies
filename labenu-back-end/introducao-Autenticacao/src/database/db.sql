USE labenu__;

SELECT * FROM to_do_list_users;
ALTER TABLE to_do_list_users
ADD COLUMN password VARCHAR(255);