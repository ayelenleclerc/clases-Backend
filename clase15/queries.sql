-- CREATE_TABLE <nombre-tabla> (
--     col_1 tipo_col_1,
--     col_2 tipo_col_2
-- );

-- sintaxis basica de base de datos
CREATE_TABLE users (
    id INT,
    name VARCHAR(100),
    lastname VARCHAR(100),
    gender CHAR(2),
    -- constraints se llaman por ejemplo a las PRIMARY KEY.
    PRIMARY KEY (id),
);

-- INSERT INTO <nombre-tabla> (col1,col2,col3)
-- VALUES (valor1, valor2, valor3)

INSERT INTO  users (id,name,lastname, gender)
VALUES (1, "Ayelen", "Leclerc","FM"),
--     (2,"Tatiana", "Leclerc","FM"); si agregamos mas datos.

-- SELECT col1, col2, col3 FROM <nombre-base-de-datos>.<nombre-tabla>; para datos especificos de la tabla.
-- SELECT * FROM <nombre-tabla>;  para todos los datos

SELECT name, lastname FROM users;

--todo esto es para simplificar la escritura, luego debe copiarse al workbrench o a la consola
