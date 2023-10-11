
-- base de datps
CREATE DATABASE database_links;

-- que base de datos voy a usar
USE database_links;

-- creo tabla de usuarios
CREATE TABLE users(
    id INT(11) not null,
    username VARCHAR(255) not null,
    password VARCHAR(255) not null,
    fullname VARCHAR(255) not null
);

-- altero agrego y modifico algunos campos 
ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- se crea la tabla de links
CREATE TABLE links(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id int(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)

);

ALTER TABLE links
    ADD PRIMARY key (id);


ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;




delimiter |
create trigger dbp_modelo_agendamiento.tbl_rinformacion
    BEFORE INSERT on dbp_modelo_agendamiento.tbl_rinformacion for each row
begin
 set new.INF_CFECHA_REGISTRO = now();
end
|
delimiter |
create trigger dbp_modelo_agendamiento.tbl_rinformacion1
    BEFORE UPDATE on dbp_modelo_agendamiento.tbl_rinformacion for each row
begin
 set new.INF_CFECHA_MODIFICACION = now();
 end
|
